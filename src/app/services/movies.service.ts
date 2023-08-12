import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {fanFavouriteMovie} from "../components/home/home.component";
import {movieActor} from "../components/details-actors/details-actors.component";
import {similarMovie} from "../components/details-movies/details-movies.component";
import {review} from "../components/details-reviews/details-reviews.component";
import {searchResult} from "../components/search/search.component";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  //http request using error handling via subscribe
  getFanFavouriteMovies() {
    return this.httpClient.get<fanFavouriteMovie[]>('assets/data/fanFavouriteMovies.json')
  }

  //http request using error handling via pipe
  getTopMovies() {
    return this.httpClient.get<any[]>('assets/data/topMovies.json')
  }

  getMovieSummary() {
    return this.httpClient.get('assets/data/movieSummary.json')
  }

  getMovieActors(){
    return this.httpClient.get<movieActor[]>('assets/data/movieActors.json')
  }

  getSimilarMovies() {
    return this.httpClient.get<similarMovie[]>('assets/data/similarMovies.json')
  }

  getMovieReviews(){
    return this.httpClient.get<review[]>('assets/data/movieReviews.json')
  }

  searchMovies() {
    return this.httpClient.get<searchResult[]>('assets/data/movieSearch.json')
  }
}
