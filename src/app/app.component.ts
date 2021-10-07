import { Component } from '@angular/core';
import { IFeatureShows } from './ifeature-shows';
import { ShowsService } from './shows.service';
import { IFeatureShowsData } from './ifeature-shows-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'TV-show-app';
  currentSearch: Array<IFeatureShows> = []
  todaysShows: Array<IFeatureShows> = []
  displayTodayShows = true;
  currentSearchValue = "";
    
    constructor(private showsService: ShowsService) {
      this.getTodaysShows()
    }
    
    doSearch(searchValue:string) {
      const userInput = searchValue.split(',').map(i => i.trim() );
      this.currentSearchValue = userInput[0];
      
      this.showsService.getShows(userInput[0]).subscribe(data => this.currentSearch = data)
      this.displayTodayShows = false;
    }
    
    getTodaysShows() {
      this.showsService.getTodaysShows().subscribe(data => this.todaysShows = data)
    }
  }
