import axios from 'axios';

import { TRADE_MACHINE_BASE_URL } from './constants';

const getTeamDetails = async (team) => {
  const response = await axios.get(`${TRADE_MACHINE_BASE_URL}/getTeamHTML`, {
    params: {
      teamId: team.id,
      xhr: 1,
      teamPos: 1,
      numTeams: 0,
      numTrades: 0,
      langType: 0,
    },
  });
};

module.exports = {
  getTeamDetails,
};
