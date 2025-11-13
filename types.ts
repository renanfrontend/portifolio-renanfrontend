
export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}