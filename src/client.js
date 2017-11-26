import axios from 'axios';
import qs from 'qs';

import { TRADE_MACHINE_BASE_URL } from './data/Constants';
import { parseTeamDetails, parseSuccessfulTransactionResult, parseUnsuccessfulTransactionResult } from './ResponseParsers';
import { generateTransactionsQuery } from './QueryGenerator';
import TransactionsError from './errors/TransactionsError';

const getTeamDetails = async (team) => {
  const response = await axios.get(`${TRADE_MACHINE_BASE_URL}/getTeamHTML`, {
    params: {
      teamId: team.espnId,
      xhr: 1,
      teamPos: 1,
      numTeams: 0,
      numTrades: 0,
      langType: 0,
    },
    headers: {
      referer: 'http://www.espn.com/nba/tradeMachine',
    },
  });
  return parseTeamDetails(response.data);
};

const executeTransactions = async (transactions) => {
  const query = generateTransactionsQuery(transactions);
  const response = await axios({
    method: 'post',
    url: `${TRADE_MACHINE_BASE_URL}/processTrade`,
    data: qs.stringify({ tradeStr: JSON.stringify(query) }),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  if (response.data.success) {
    return parseSuccessfulTransactionResult(response.data);
  }
  throw new TransactionsError(parseUnsuccessfulTransactionResult(response.data));
};

module.exports = {
  getTeamDetails,
  executeTransactions,
};
