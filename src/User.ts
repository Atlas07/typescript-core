import { Repo } from "./Repo";

export class User {
  login: string;
  fullName: string;
  repoCount: number;
  followerCount: number;
  repos?: Repo[];

  constructor(userRes: any) {
    const {
      login,
      name,
      public_repos,
      followers,
    } = userRes;

    this.login = login;
    this.fullName = name;
    this.repoCount = public_repos;
    this.followerCount = followers;
  }
};