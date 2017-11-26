import { Record } from 'immutable';

const defaults = {
  receivingTeam: null,
  sendingTeam: null,
  asset: null,
};

class Transaction extends Record(defaults) {}

export default Transaction;
