export interface IFeatureShows {
  id: number;
  name: string;
  language: string;
  genres: Array<String>;
  status: string;
  runtime: number;
  rating: number;
  image: string;
  summary: string;
  network?: string;
}
