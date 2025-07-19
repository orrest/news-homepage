export interface Article {
  title: string;
  summary: string;
  news: News[];
  trends: Trend[];
}

export interface News {
  title: string;
  summary: string;
}

export interface Trend {
  title: string;
  summary: string;
}
