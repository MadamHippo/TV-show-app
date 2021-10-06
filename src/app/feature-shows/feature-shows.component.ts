import { Component, Input, OnInit } from '@angular/core';
import { IFeatureShows } from '../ifeature-shows';

@Component({
  selector: 'app-feature-shows',
  templateUrl: './feature-shows.component.html',
  styleUrls: ['./feature-shows.component.css']
})
export class FeatureShowsComponent implements OnInit {
  @Input() current: Array<IFeatureShows>

  constructor() {
    this.current = []
  }

  ngOnInit(): void { }

}
