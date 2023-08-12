import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MoviesService} from "../../services/movies.service";

export interface movieActor {
  imageUrl: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css']
})
export class DetailsActorsComponent implements OnInit {
  movieActors: movieActor[] = [];

  constructor(private moviesService: MoviesService) {
  }
  ngOnInit(): void {
    this.getMovieActors();
  }

  getMovieActors(){
    this.moviesService.getMovieActors()
      .subscribe(data => {
        console.log("actors", data);
        this.movieActors = data
      })
  }

}
