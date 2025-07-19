export interface Article {
  title: string;
  summary: string;
  news: New[];
  trends: Trend[];
}

export interface New {
  title: string;
  summary: string;
}

export interface Trend {
  title: string;
  summary: string;
  url: string;
  width: number;
  height: number;
}
