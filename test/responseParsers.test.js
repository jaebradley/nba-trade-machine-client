import { parsePlayerRestrictions, parsePlayerDetails } from '../src/responseParsers';
import { teamDetailsHtml } from './constants';

describe('#responseParsers', () => {
  describe('#parsePlayerRestrictions', () => {
    const restrictions = parsePlayerRestrictions(teamDetailsHtml);
    expect(restrictions).not.toBeUndefined();
  });

  describe('#parsePlayerDetails', () => {
    const playerDetails = parsePlayerDetails(teamDetailsHtml);
    console.log(playerDetails);
  });
});
