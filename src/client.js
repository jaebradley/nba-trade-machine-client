import axios from 'axios';

import { TRADE_MACHINE_BASE_URL } from './data/Constants';
import { parseTeamDetails } from './ResponseParsers';
import { generateTransactionsQuery } from './QueryGenerator';

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
  const response = await axios.post(`${TRADE_MACHINE_BASE_URL}/processTrade`, {
    tradeStr: query,
  });
  return response;
};

module.exports = {
  getTeamDetails,
  executeTransactions,
};
