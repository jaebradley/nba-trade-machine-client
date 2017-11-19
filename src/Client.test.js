import moment from 'moment';

import { getTeamDetails, executeTransactions } from '../src/Client';
import { Team } from '../src/data/Team';
import { Position } from '../src/data/Position';
import Transaction from '../src/data/Transaction';
import PlayerAsset from '../src/data/PlayerAsset';
import TransactionsError from '../src/errors/TransactionsError';
import TransactionFailureReason from '../src/data/TransactionFailureReason';

const testRestriction = (restriction) => {
  expect(restriction.reason).toEqual('Signed Contract');
  expect(restriction.expirationDate.isSame(moment(new Date(2017, 11, 14)))).toEqual(true);
  expect(restriction.explanation).toEqual('When a free agent signs a contract, or when a player signed to a Two-Way contract has his contract converted to a standard NBA contract, they cannot be traded until December 15 or 3 months, whichever is later.');
};

const testPlayerDetails = (player) => {
  expect(player.espnId).toEqual('4249');
  expect(player.displayName).toEqual('G.\u00A0Hayward');
  expect(player.salaryUSD).toEqual(29727900);
  expect(player.remainingContractYears).toEqual(4);
  expect(player.position).toEqual(Position.SMALL_FORWARD);
  expect(player.playerEfficiencyRating).toBeNull();
  expect(player.restrictions.size).toEqual(1);
};

describe('#client integration test', () => {
  it('should fetch team details', async () => {
    const details = await getTeamDetails(Team.BOSTON_CELTICS);
    expect(details.remainingTaxSpaceUSD).toEqual(8736322);
    expect(details.availableCapRoomUSD).toEqual(-10780911);
    expect(details.playerDetails.size).toEqual(16);
    const gordonHayward = details.playerDetails.get(0);
    testPlayerDetails(gordonHayward);
    testRestriction(gordonHayward.restrictions.get(0));
  });

  it('should attempt unsuccessful transactions', async () => {
    const transactions = [];
    transactions.push(new Transaction({
      asset: new PlayerAsset({
        espnId: '4262',
        position: Position.CENTER,
      }),
      sendingTeam: Team.MIAMI_HEAT,
      receivingTeam: Team.BOSTON_CELTICS,
    }));
    transactions.push(new Transaction({
      asset: new PlayerAsset({
        espnId: '2990992',
        position: Position.POINT_GUARD,
      }),
      receivingTeam: Team.MIAMI_HEAT,
      sendingTeam: Team.BOSTON_CELTICS,
    }));
    try {
      await executeTransactions(transactions);
    } catch (e) {
      const expected = new TransactionsError([
        new TransactionFailureReason({
          team: Team.BOSTON_CELTICS,
          reason: "The Celtics are over the luxury tax threshold with this trade and the incoming aggregate salaries exceeded what's allowed via the 125% plus $100,000 rule. Cut $18,002,981 from the Celtics incoming trade value to make this trade successful. ",
        }),
      ]);
      expect(e).toEqual(expected);
    }
  });

  it('should make transactions', async () => {
    const transactions = [];
    transactions.push(new Transaction({
      asset: new PlayerAsset({
        espnId: '3981',
        position: Position.SHOOTING_GUARD,
      }),
      sendingTeam: Team.MIAMI_HEAT,
      receivingTeam: Team.ATLANTA_HAWKS,
    }));
    transactions.push(new Transaction({
      asset: new PlayerAsset({
        espnId: '2767',
        position: Position.POINT_GUARD,
      }),
      receivingTeam: Team.MIAMI_HEAT,
      sendingTeam: Team.ATLANTA_HAWKS,
    }));
    const result = await executeTransactions(transactions);
    expect(result).not.toBeUndefined();
    expect(result.length).toEqual(2);
    expect(result[0].team).toEqual(Team.ATLANTA_HAWKS);
    expect(result[0].winDifferential).toEqual(0);
  });
});
