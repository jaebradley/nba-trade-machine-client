import { Record } from 'immutable';

const defaults = {
  reason: '',
  expirationDate: null,
  explanation: '',
};

class PlayerRestriction extends Record(defaults) {}

export default PlayerRestriction;
