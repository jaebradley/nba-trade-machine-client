import cheerio from 'cheerio';
import { List, Map } from 'immutable';
import moment from 'moment';

import PlayerRestriction from './data/PlayerRestriction';
import PlayerDetails from './data/PlayerDetails';

const parseTeamDetails = (data) => {
  const $ = cheerio.load(data);
  const teamPayRollValueClassName = 'teampayrollvalue';
  const teamCapRoomValueClassName = 'caproomvalue';
};

const parsePlayerRestrictions = (data) => {
  const $ = cheerio.load(data);
  let playerRestrictions = Map();
  $('.restriction-popup').each((i, el) => {
    const playerId = el.attribs.id.substring('restriction_'.length);
    const reason = $(el).children('h3').text().split('\n')[0];
    const explanation = $(el).children('p').text();
    const expirationDate = moment($(el).children('span').children('strong').text(), 'MMMM D, YYYY');
    const playerRestriction = new PlayerRestriction({ reason, expirationDate, explanation });
    playerRestrictions = playerRestrictions.set(playerId, playerRestriction);
  });
  return playerRestrictions;
};

const parsePlayerDetails = (data) => {
  const $ = cheerio.load(data);
  const playerRestrictions = parsePlayerRestrictions(data);
  let playerDetails = [];
  return List($('.player').map((i, el) => {
    console.log($(el).find('.salary').text());
    const espnId = el.attribs.id.substring('player_'.length);
    const salaryUSD = $(el).find('.salary').text();
    const remainingContractYears = $(el).find('.line > .c2').last().text().split(' ')[0];
    const playerEfficiencyRating = $(el).find('.c3').text();
    const position = $(el).find('.posId').text();
    return new PlayerDetails({ espnId, salaryUSD, remainingContractYears, playerEfficiencyRating, position, restrictions: playerRestrictions.get(espnId) || List() });
  }));
};


module.exports = {
  parseTeamDetails,
  parsePlayerRestrictions,
  parsePlayerDetails,
};
