import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  movieId = '';

  stars: string[] = [];
  genres: string[] = [];
  directors: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    this.activatedRoute.params.subscribe((param) => {
        this.movieId = param?.["id"];
        console.log(this.movieId);
    })
  }

  ngOnInit(): void {
      this.getMovieSummary();
  }

  getMovieSummary() {
    this.moviesService.getMovieSummary().subscribe((data: any) => {
      this.directors = data.directors;
      this.stars = data.stars;
      this.genres = data.genres;
    })

  }
}
