
import { GithubRepo } from '../types';

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'renanfrontend';
const REPOS_PER_PAGE = 6;

export const fetchRepos = async (page: number): Promise<GithubRepo[]> => {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${USERNAME}/repos?sort=pushed&direction=desc&per_page=${REPOS_PER_PAGE}&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Falha ao buscar repositórios do GitHub');
    }
    const data = await response.json();
    // Filter out forked repositories
    return data.filter((repo: any) => !repo.fork);
  } catch (error) {
    console.error(error);
    return [];
  }
};
