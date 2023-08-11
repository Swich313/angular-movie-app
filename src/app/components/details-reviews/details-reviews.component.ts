import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface review {
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

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getMovieReviews();
  }

  getMovieReviews(){
    this.httpClient.get<review[]>('assets/data/movieReviews.json')
      .subscribe(data => {
        console.log("reviews", data)
        this.reviews = data;
      })
  }
}
