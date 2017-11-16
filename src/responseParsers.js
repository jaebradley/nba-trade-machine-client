import cheerio from 'cheerio';
import { List, Map } from 'immutable';
import moment from 'moment';
import numeral from 'numeral';

import PlayerRestriction from './data/PlayerRestriction';
import PlayerDetails from './data/PlayerDetails';
import TeamDetails from './data/TeamDetails';
import { identifyPosition } from './data/Position';

const parsePlayerRestrictions = (data) => {
  const $ = cheerio.load(data);
  let playerRestrictions = Map();
  $('.restriction-popup').each((i, el) => {
    const playerId = el.attribs.id.substring('restriction_'.length);
    const reason = $(el).children('h3').text().split('\n')[0];
    const explanation = $(el).children('p').text();
    const expirationDate = moment($(el).children('span').children('strong').text(), 'MMMM D, YYYY');
    const playerRestriction = new PlayerRestriction({ reason, expirationDate, explanation });
    let existingRestrictions = playerRestrictions.get(playerId) || List();
    existingRestrictions = existingRestrictions.push(playerRestriction);
    playerRestrictions = playerRestrictions.set(playerId, existingRestrictions);
  });
  return playerRestrictions;
};

const parsePlayerDetails = (data) => {
  const $ = cheerio.load(data);
  const playerRestrictions = parsePlayerRestrictions(data);
  return List($('.player').map((i, el) => {
    const espnId = el.attribs.id.substring('player_'.length);
    const displayName = $(el).find('.playerName').text();
    const salaryUSD = numeral($(el).find('.salary').text()).value();
    const remainingContractYears = parseInt($(el).find('.line > .c2')
    .last()
    .text()
    .split(' ')[0], 10);
    const playerEfficiencyRating = $(el).find('.c3').text() === 'N/A' ? null : parseFloat($(el).find('.c3').text());
    const position = identifyPosition(parseInt($(el).find('.posId').text(), 10));
    return new PlayerDetails({
      espnId,
      displayName,
      salaryUSD,
      remainingContractYears,
      playerEfficiencyRating,
      position,
      restrictions: playerRestrictions.get(espnId) || List(),
    });
  }));
};

const parseTeamDetails = (data) => {
  const $ = cheerio.load(data);
  const remainingTaxSpaceUSD = -numeral($('.teampayrollvalue').text()).value();
  const availableCapRoomUSD = numeral($('.caproomvalue').text()).value();
  return new TeamDetails({
    remainingTaxSpaceUSD,
    availableCapRoomUSD,
    playerDetails: parsePlayerDetails(data),
  });
};


module.exports = {
  parseTeamDetails,
  parsePlayerRestrictions,
  parsePlayerDetails,
};
