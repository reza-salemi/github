export type RepoType = {
  id: number;
  name: string;
  html_url: string;
  watchers_count: number;
  stargazers_count: number;
  open_issues: number;
  forks: number;
  description: string | null;
}