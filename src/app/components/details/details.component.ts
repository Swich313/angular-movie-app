import {AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{
  movieId = '';

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((param) => {
        this.movieId = param?.["id"];
        console.log(this.movieId);
    })
  }

  ngOnInit(): void {
    console.log("ngOnInit is called!")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called!")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called!")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called!")
  }

}
