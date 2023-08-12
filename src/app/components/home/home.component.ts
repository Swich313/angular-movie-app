import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, of} from "rxjs";
import {MoviesService} from "../../services/movies.service";

export interface fanFavouriteMovie {
  id: string;
  imageUrl: string;
  title: string;
  actors: string;
  year: string;
  rate: number;
  rank: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isVisible = true
  int = 99

  fanFavouriteMovies: fanFavouriteMovie[] = [];
  topMovies: any[] = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getFanFavouriteMovies();
    this.getTopMovies();
  }
  //http request using error handling via subscribe
  getFanFavouriteMovies() {
    this.moviesService.getFanFavouriteMovies()
      .subscribe({
        next: (data) => {
          this.fanFavouriteMovies = data;
        },
        error: (error) => {
          console.log("getFanFavouriteMovies error:", error)
        },
        complete: () => {
          console.log("Request getFanFavouriteMovies completed successfully")
        }
      })
  }
  //http request using error handling via pipe
  getTopMovies() {
    this.moviesService.getTopMovies()
      .pipe(
        catchError((error) => {
      console.log("getTopMovies error:", error)
          return of(null)
    })
      ).subscribe((data) => {
        if(data) {
          this.topMovies = data;
        } else {
          this.topMovies = [];
        }
      }
      )
  }
}
