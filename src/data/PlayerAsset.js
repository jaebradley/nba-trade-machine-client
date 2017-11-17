import { Record } from 'immutable';

const defaults = {
  espnId: '',
  position: null,
};

class PlayerAsset extends Record(defaults) {}

export default PlayerAsset;
