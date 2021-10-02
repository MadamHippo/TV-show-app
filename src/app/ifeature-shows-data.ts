export interface IFeatureShowsData {
  show: {
    id: number,
    name: string,
    language: string,
    genres: Array<String>,
    status: string,
    runtime: number,
    rating: {
      average: number
    },
    image: {
      medium: string;
      original: string;
    },
    summary: string,
    network: {
      name: string
    }
  }
    
}
