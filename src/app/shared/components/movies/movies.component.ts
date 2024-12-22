import { Component, OnInit } from '@angular/core';
import { movieArray } from '../../const/movie';
import { Imovie } from '../../modules/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieInfo:Array<Imovie>=movieArray

  constructor() { }

  ngOnInit(): void {
  }

}
