import { List, Record } from 'immutable';

const defaults = {
  espnId: 0,
  salaryUSD: 0,
  remainingContractYears: 0,
  position: null,
  playerEfficiencyRating: 0,
  restrictions: List(),
};

class PlayerDetails extends Record(defaults) {}

export default PlayerDetails;
