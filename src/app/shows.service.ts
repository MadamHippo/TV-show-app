import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFeatureShowsData } from './ifeature-shows-data';
import { environment } from 'src/environments/environment';
import { IFeatureShows } from './ifeature-shows';
import { map } from 'rxjs/operators';
import { defaultRippleAnimationConfig } from '@angular/material/core';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  constructor(
    private httpClient: HttpClient
  ) {} /* say what type it is for typescript */

  /* search shows by search keyword */

  getShows(searchWord: string | number, id?: number) {
    let uriParams = '';

    if (typeof searchWord === 'string') {
      uriParams = `search/shows?q=${searchWord}`;
    } else {
      uriParams = `lookup/shows?imdb=${id}`;
    }

    return this.httpClient
      .get<Array<IFeatureShowsData>>(
        `https://api.tvmaze.com/${uriParams}&appid=${environment.appId}`
      )
      .pipe(map((data) => this.transformToIFeatureShows(data)));
  }

  // shorten summary //

  private trimSummary(summary: string) {
    let stripperSummary = summary.replace(/(&nbsp;|<([^>]+)>)/gi, '');

    // match an open < and anyting except > and then also remove >

    // splitting string by space

    let finalSummary = '';
    let words;

    words = stripperSummary.split(' ');
    if (words.length > 150) {
      finalSummary = words.slice(0, 150).join(' ') + '...';
      return finalSummary;
    } else {
      return stripperSummary;
    }
  }

  /* do with simple slice with letters

  if (stripperSummary.length > 300) {
    return stripperSummary.slice(0, 300) + '...';
  }
  return stripperSummary;
}; */


  /* how to transform IFeatureShows (type = array) into the data we want using map to return a 1 to 1.*/

  private transformToIFeatureShows(
    data: Array<IFeatureShowsData>
  ): Array<IFeatureShows> {
    /* data is parameter and IFeatureShowsData is a type reqiured by Typescript */
    let shows = [];

    /* null guarding because network element could be often empty */

    for (let element of data) {
      let networkElement = '';
      let ratingElement = 0;
      let genreElement = [];

      if (element.show.network) {
        networkElement = element.show.network.name;
      }

      if (element.show.rating) {
        ratingElement = element.show.rating.average;
      }

      if (element.show.genres) {
        genreElement = element.show.genres;
      }

      shows.push({
        id: element.show.id,
        name: element.show.name,
        language: element.show.language,
        genres: element.show.genres,
        status: element.show.status,
        runtime: element.show.runtime,
        rating: element.show.rating.average,
        image: element.show.image.medium,
        summary: this.trimSummary(element.show.summary),
        network: networkElement,
      });
    }

    return shows;
  }
}
