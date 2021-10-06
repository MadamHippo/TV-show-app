import { Component, Input, OnInit } from '@angular/core';
import { IFeatureShows } from '../ifeature-shows';

@Component({
  selector: 'app-feature-shows',
  templateUrl: './feature-shows.component.html',
  styleUrls: ['./feature-shows.component.css']
})
export class FeatureShowsComponent implements OnInit {
  @Input() current: IFeatureShows

  constructor() {
    this.current = {
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
  }

  ngOnInit(): void { }

}
