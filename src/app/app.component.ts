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
  currentSearch: IFeatureShows = {
    id: 0,
    name:'',
    language:'',
    genres: [],
    status:'',
    runtime: 0,
    rating: 0,
    image: ``,
    summary:'',
    network:''
    }
    
    constructor(private showsService: ShowsService) {}
    
    doSearch(searchValue:string) {
      const userInput = searchValue.split(',').map(i => i.trim() );
      
      
      this.showsService.getShows(userInput[0]).subscribe(data => this.currentSearch = data)

  }
  }