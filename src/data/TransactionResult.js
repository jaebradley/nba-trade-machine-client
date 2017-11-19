import { Record } from 'immutable';

const defaults = {
  team: null,
  winDifferential: 0,
};

class TransactionResult extends Record(defaults) {}

export default TransactionResult;
