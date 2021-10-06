import { Component } from '@angular/core';
import { IFeatureShows } from './ifeature-shows';
import { ShowsService } from './shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'TV-show-app';
  currentSearch: Array<IFeatureShows> = []
    
    constructor(private showsService: ShowsService) {}
    
    doSearch(searchValue:string) {
      const userInput = searchValue.split(',').map(i => i.trim() );
      
      this.showsService.getShows(userInput[0]).subscribe(data => this.currentSearch = data)
    }
  }