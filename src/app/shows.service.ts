import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFeatureShowsData } from './ifeature-shows-data';
import { environment } from 'src/environments/environment';
import { IFeatureShows } from './ifeature-shows';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) { } /* say what type it is for typescript */

  /* search shows by search keyword */

  getShows(searchWord: string|number, id?: number){
    let uriParams = '';

    if (typeof searchWord === 'string'){
      uriParams = `search/shows?q=${searchWord}`
    } else {
      uriParams = `lookup/shows?imdb=${id}`
    }

    return this.httpClient.get<Array<IFeatureShowsData>>(`https://api.tvmaze.com/${uriParams}&appid=${environment.appId}`).pipe(
      map(data => this.transformToIFeatureShows(data))
      )

  }

  private transformToIFeatureShows(data: Array<IFeatureShowsData>): IFeatureShows{ /* data is parameter and IFeatureShowsData is a type reqiured by Typescript */
    return {
      id: data[0].show.id,
      name: data[0].show.name,
      language: data[0].show.language,
      genres: data[0].show.genres,
      status: data[0].show.status,
      runtime: data[0].show.runtime,
      rating: data[0].show.rating.average,
      image: `https://static.tvmaze.com/uploads/images/medium_portrait/${data[0].show.image}.jpg`,
      summary: data[0].show.summary,
      network: data[0].show.network.name
    }
  }
}
