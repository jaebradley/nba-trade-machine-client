const Position = Object.freeze({
  POINT_GUARD: { espnId: 1, name: 'Point Guard' },
  SHOOTING_GUARD: { espnId: 2, name: 'Shooting Guard' },
  SMALL_FORWARD: { espnId: 5, name: 'Small Forward' },
  POWER_FORWARD: { espnId: 6, name: 'Power Forward' },
  CENTER: { espnId: 9, name: 'Center' },
});

const identifyPosition = (espnId) => {
  switch (espnId) {
    case Position.POINT_GUARD.espnId:
      return Position.POINT_GUARD;
    case Position.SHOOTING_GUARD.espnId:
      return Position.SHOOTING_GUARD;
    case Position.SMALL_FORWARD.espnId:
      return Position.SMALL_FORWARD;
    case Position.POWER_FORWARD.espnId:
      return Position.POWER_FORWARD;
    case Position.CENTER.espnId:
      return Position.CENTER;
    default:
      throw new Error(`Unable to identify position for ${espnId}`);
  }
};

module.exports = {
  Position,
  identifyPosition,
};
