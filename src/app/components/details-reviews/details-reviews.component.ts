import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MoviesService} from "../../services/movies.service";

export interface review {
  rate: number;
  header: string;
  body: string;
  author: string;
  votes: number;
  totalVotes: number;
}

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit{
  reviews: review[] = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getMovieReviews();
  }

  getMovieReviews(){
    this.moviesService.getMovieReviews()
      .subscribe(data => {
        console.log("reviews", data)
        this.reviews = data;
      })
  }
}
