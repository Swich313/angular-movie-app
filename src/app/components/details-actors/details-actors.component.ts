import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface movieActor {
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

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.getMovieActors();
  }

  getMovieActors(){
    this.httpClient.get<movieActor[]>('assets/data/movieActors.json')
      .subscribe(data => {
        console.log("actors", data);
        this.movieActors = data
      })
  }

}
