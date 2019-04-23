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
  getUserInfo(userName: string): Promise<User> {
    return new Promise((resolve: (u: User) => void, reject: any) => {
      request.get(`${url}${userName}`, options, (err: any, res: any, body: any) => {
        if (err) {
          reject(err);
        }

        const user = new User(body);
        resolve(user);
      });
    });
  }

  getRepos(username: string): Promise<Repo[]> {
    return new Promise((resolve: (r: Repo[]) => void, reject: any) => {
      request.get(`${url}${username}/repos`, options, (err: any, res: any, body: any) => {
        if (err) {
          return reject(err);
        }
  
        const repos = body.map((repo: any) => new Repo(repo));
        resolve(repos);
      });
    });
  }
}