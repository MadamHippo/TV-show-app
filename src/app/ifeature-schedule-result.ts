import { IFeatureShowsData } from './ifeature-shows-data';

export interface IFeatureScheduleResult {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: Date;
  airtime: string;
  runtime: number;
  rating: number;
  image: string;
  summary: string;
  network?: string;
  _embedded: IFeatureShowsData
}
