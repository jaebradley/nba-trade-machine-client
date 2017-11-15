import { getTeamDetails } from '../src/client';
import TEAM from '../src/team';

describe('#client integration test', () => {
  it('should fetch team details', async () => {
    const teamDetails = await getTeamDetails(TEAM.BOSTON_CELTICS);
    console.log(teamDetails);
    expect(teamDetails).not.toBeUndefined();
  });
});
