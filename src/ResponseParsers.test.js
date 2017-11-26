import moment from 'moment';

import { parsePlayerRestrictions, parsePlayerDetails, parseTeamDetails } from '../src/ResponseParsers';
import { teamDetailsHtml } from '../test/constants';
import { Position } from '../src/data/Position';

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

describe('#responseParsers', () => {
  describe('#parsePlayerRestrictions', () => {
    it('should parse player restrictions', () => {
      const restrictions = parsePlayerRestrictions(teamDetailsHtml);
      // Gordon Hayward Restriction
      testRestriction(restrictions.get('4249').get(0));
    });
  });

  describe('#parsePlayerDetails', () => {
    it('should parse player details', () => {
      const details = parsePlayerDetails(teamDetailsHtml);

      const gordonHayward = details.get(0);
      testPlayerDetails(gordonHayward);
      testRestriction(gordonHayward.restrictions.get(0));
    });
  });

  describe('#parseTeamDetails', () => {
    it('should parse team details', () => {
      const details = parseTeamDetails(teamDetailsHtml);

      expect(details.remainingTaxSpaceUSD).toEqual(8736322);
      expect(details.availableCapRoomUSD).toEqual(-10780911);
      expect(details.playerDetails.size).toEqual(16);
      const gordonHayward = details.playerDetails.get(0);
      testPlayerDetails(gordonHayward);
      testRestriction(gordonHayward.restrictions.get(0));
    });
  });
});
