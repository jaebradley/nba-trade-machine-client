import { Record } from 'immutable';

const defaults = {
  team: null,
  reason: '',
};

class TransactionFailureReason extends Record(defaults) {}

export default TransactionFailureReason;
