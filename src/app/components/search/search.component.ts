import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface searchResult {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  detailLink: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  movieTitle:Observable<string>;
  searchResult: searchResult[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
      this.movieTitle = this._activatedRoute.params.pipe(map(p => p?.['movieTitle']));
  }

  ngOnInit(): void {
      this.searchMovies()
  }

  searchMovies() {
    this.httpClient.get<searchResult[]>('assets/data/movieSearch.json')
      .subscribe(data => {
        this.searchResult = data;
        console.log(data)
      })
  }
}
