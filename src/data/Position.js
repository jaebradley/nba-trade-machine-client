const Position = Object.freeze({
  POINT_GUARD: { id: 1, name: 'Point Guard' },
  SHOOTING_GUARD: { id: 2, name: 'Shooting Guard' },
  SMALL_FORWARD: { id: 5, name: 'Small Forward' },
  POWER_FORWARD: { id: 6, name: 'Power Forward' },
  CENTER: { id: 9 },
});

const identifyPosition = (id) => {
  switch (id) {
    case Position.POINT_GUARD.id:
      return Position.POINT_GUARD;
    case Position.SHOOTING_GUARD.id:
      return Position.SHOOTING_GUARD;
    case Position.SMALL_FORWARD.id:
      return Position.SMALL_FORWARD;
    case Position.POWER_FORWARD.id:
      return Position.POWER_FORWARD;
    case Position.CENTER.id:
      return Position.CENTER;
    default:
      throw new Error(`Unable to identify position for ${id}`);
  }
};

module.exports = {
  Position,
  identifyPosition,
};
