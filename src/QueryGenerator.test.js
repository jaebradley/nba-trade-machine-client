import Transaction from './data/Transaction';
import { Team } from './data/Team';
import PlayerAsset from './data/PlayerAsset';
import { Position } from './data/Position';
import { generateTransactionsQuery } from './QueryGenerator';


describe('#generateTransactionsQuery', () => {
  const transactions = [
    new Transaction({
      receivingTeam: Team.BOSTON_CELTICS,
      sendingTeam: Team.GOLDEN_STATE_WARRIORS,
      asset: new PlayerAsset({
        espnId: '1',
        position: Position.POINT_GUARD,
      }),
    }),
    new Transaction({
      receivingTeam: Team.GOLDEN_STATE_WARRIORS,
      sendingTeam: Team.BOSTON_CELTICS,
      asset: new PlayerAsset({
        espnId: '2',
        position: Position.SHOOTING_GUARD,
      }),
    }),
    new Transaction({
      receivingTeam: Team.BOSTON_CELTICS,
      sendingTeam: Team.GOLDEN_STATE_WARRIORS,
      asset: new PlayerAsset({
        espnId: '3',
        position: Position.CENTER,
      }),
    }),
  ];

  it('should return transactions query', () => {
    const query = generateTransactionsQuery(transactions);
    const expected = {
      teams: [
        {
          inComingAssets: [
            {
              assetObj: {
                name: '',
                playerId: '1',
                posId: 1,
                salary: 0,
                teUsed: 'false',
              },
              fromTeamId: '9',
              type: 'player',
            },
            {
              assetObj: {
                name: '',
                playerId: '3',
                posId: 9,
                salary: 0,
                teUsed: 'false',
              },
              fromTeamId: '9',
              type: 'player',
            },
          ],
          teamId: '2',
        },
        {
          inComingAssets: [
            {
              assetObj: {
                name: '',
                playerId: '2',
                posId: 2,
                salary: 0,
                teUsed: 'false',
              },
              fromTeamId: '2',
              type: 'player',
            },
          ],
          teamId: '9',
        },
      ],
    };
    expect(query).toEqual(expected);
  });
});
