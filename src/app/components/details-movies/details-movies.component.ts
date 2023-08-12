import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MoviesService} from "../../services/movies.service";

export interface similarMovie {
  imageUrl: string,
  title: string,
  rate: number
}

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit{
  similarMovies: similarMovie[] = [];

    constructor(private moviesService: MoviesService) {
    }

  ngOnInit(): void {
      this.getSimilarMovies();
  }

  getSimilarMovies() {
      this.moviesService.getSimilarMovies()
        .subscribe(data => {
          console.log(data)
          this.similarMovies = data;
      })
  }
}
