import { sortBy } from 'lodash';

import { GithubApiService } from './GitApiServise';
import { Repo } from './Repo';

const service = new GithubApiService();

if (process.argv.length < 3) {
  console.error('Error. Provide a username as an argument');
} else {
  const username: string = process.argv[2];

  Promise.all([
    service.getUserInfo(username),
    service.getRepos(username),
  ]).then(([ user, repos ]) => {
    const sortedRepos = sortBy(
      repos,
      [((repo: Repo) => repo.forkCount * -1)],
    );

    user.repos = sortedRepos;
    console.log(user);
  }).catch((err: any) => console.error(err));
}
