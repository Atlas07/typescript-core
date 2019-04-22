import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const options: any = {
  headers: {
    'User-Agent': 'request',
  },
  json: true,
};
const url: string = 'https://api.github.com/users/';

export class GithubApiService {
  getUserInfo(userName: string, cb: (err: any, user?: User) => any) {
    request.get(`${url}${userName}`, options, (err: any, res: any, body: any) => {
      if (err) {
        return cb(err);
      }

      const user = new User(body);
      cb(null, user);
    });
  }

  getRepos(userName: string, cb: (err: any, repos?: Repo[]) => any) {
    request.get(`${url}${userName}/repos`, options, (err: any, res: any, body: any) => {
      if (err) {
        return cb(err);
      }

      const repos = body.map((repo: any) => new Repo(repo));
      cb(null, repos);
    });
  }
}