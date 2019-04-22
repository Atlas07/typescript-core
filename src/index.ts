import { GithubApiService } from './GitApiServise';
import { User } from './User';
import { Repo } from './Repo';

const service = new GithubApiService();

service.getUserInfo('Atlas07', (err: any, user?: User) => {
  console.log(user);
});

service.getRepos('Atlas07', (err: any, repos?: Repo[]) => {
  console.log(repos);
});