import { Component, OnInit } from '@angular/core';
import { IFeatureShows } from '../ifeature-shows';

@Component({
  selector: 'app-feature-shows',
  templateUrl: './feature-shows.component.html',
  styleUrls: ['./feature-shows.component.css']
})
export class FeatureShowsComponent implements OnInit {
  current: IFeatureShows
  constructor() {
    this.current = {
      id: 1,
      name: "The Simpsons",
      language: "English",
      genres: ["family", "comedy"],
      status: "Running",
      runtime: 30,
      rating: 8.9,
      image: "",
      summary: "The Simpsons is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield.",
      network: "FOX"
    }
  }

  ngOnInit(): void {
  }

}
