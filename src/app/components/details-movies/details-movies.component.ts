import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface similarMovie {
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
    // {
    //   imageUrl: '../../../assets/images/img_1.png',
    //   title: 'Movie #1 Title',
    //   rate: 9.5
    // },
    // {
    //   imageUrl: '../../../assets/images/img_1.png',
    //   title: 'Movie #1 Title',
    //   rate: 9.1
    // },
    // {
    //   imageUrl: '../../../assets/images/img_1.png',
    //   title: 'Movie #2 Title',
    //   rate: 9.2
    // },
    // {
    //   imageUrl: '../../../assets/images/img_1.png',
    //   title: 'Movie #3 Title',
    //   rate: 9.3
    // },
    // {
    //   imageUrl: '../../../assets/images/img_1.png',
    //   title: 'Movie #4 Title',
    //   rate: 9.4
    // },
    // {
    //   imageUrl: '../../../assets/images/img_1.png',
    //   title: 'Movie #5 Title',
    //   rate: 9.5
    // },
    // {
    //   imageUrl: '../../../assets/images/img_1.png',
    //   title: 'Movie #6 Title',
    //   rate: 9.6
    // },
    // {
    //   imageUrl: '../../../assets/images/img_1.png',
    //   title: 'Movie #7 Title',
    //   rate: 9.7
    // }
    constructor(private httpClient: HttpClient) {
    }

  ngOnInit(): void {
      this.getSimilarMovies();
  }

  getSimilarMovies() {
      this.httpClient.get<similarMovie[]>('assets/data/similarMovies.json')
        .subscribe(data => {
          console.log(data)
          this.similarMovies = data;
      })
  }
}
