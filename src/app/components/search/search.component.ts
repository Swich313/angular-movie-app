import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movieTitle:Observable<string>;

  constructor(private _activatedRoute: ActivatedRoute) {
      this.movieTitle = this._activatedRoute.params.pipe(map(p => p?.['movieTitle']));
      console.log(this.movieTitle)
  }
}
