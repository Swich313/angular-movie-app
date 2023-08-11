import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, of} from "rxjs";

interface fanFavouriteMovie {
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

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getFanFavouriteMovies();
    this.getTopMovies();
  }
  //http request using error handling via subscribe
  getFanFavouriteMovies() {
    this.httpClient.get<fanFavouriteMovie[]>('assets/data/fanFavouriteMovies.json')
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
    this.httpClient.get<any[]>('assets/data/topMovies.json')
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
