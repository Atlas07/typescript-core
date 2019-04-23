import { sortBy } from 'lodash';

import { GithubApiService } from './GitApiServise';
import { User } from './User';
import { Repo } from './Repo';

const service = new GithubApiService();

service.getUserInfo('Atlas07', (err: any, user?: User) => {
  if (err) {
    console.error(err);
    return;
  }

  user && service.getRepos('Atlas07', (err: any, repos?: Repo[]) => {
    if (err) {
      console.error(err);
      return;
    }

    const sortedRepos = sortBy(
      repos,
      [((repo: Repo) => repo.forkCount * -1)],
    );

    user.repos = repos;
    console.log(user);
  });
});


