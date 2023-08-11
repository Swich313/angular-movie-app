import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

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

  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this._activatedRoute.params.subscribe((param) => {
        this.movieId = param?.["id"];
        console.log(this.movieId);
    })
  }

  ngOnInit(): void {
      this.getMovieSummary();
  }

  getMovieSummary() {
    this.httpClient.get('assets/data/movieSummary.json').subscribe((data: any) => {
      this.directors = data.directors;
      this.stars = data.stars;
      this.genres = data.genres;
    })

  }
}
