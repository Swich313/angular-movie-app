import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {MoviesService} from "../../services/movies.service";

export interface searchResult {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  detailLink: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  movieTitle:Observable<string>;
  searchResult: searchResult[] = [];

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
      this.movieTitle = this.activatedRoute.params.pipe(map(p => p?.['movieTitle']));
  }

  ngOnInit(): void {
      this.searchMovies()
  }

  searchMovies() {
    this.moviesService.searchMovies()
      .subscribe(data => {
        this.searchResult = data;
        console.log(data)
      })
  }
}
