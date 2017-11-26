import { List, Record } from 'immutable';

const defaults = {
  remainingTaxSpaceUSD: 0,
  availableCapRoomUSD: 0,
  playerDetails: List(),
};

class TeamDetails extends Record(defaults) {}

export default TeamDetails;
