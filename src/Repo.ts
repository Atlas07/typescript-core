export class Repo {
  name: string;
  description: string;
  url: string;
  size: number;
  forkCount: number;

  constructor(repo: any) {
    const {
      name,
      description,
      html_url,
      size,
      forks,
    } = repo;

    this.name = name;
    this.description = description;
    this.url = html_url;
    this.size = size;
    this.forkCount = forks;
  }
}