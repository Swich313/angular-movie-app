import {AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{
  movieId = '';

  stars: string[] = ['Star #1 Name', 'Star #2 Name', 'Star #3 Name'];
  genres: string[] = ['Genre #1 Name', 'Genre #2 Name', 'Genre #3 Name'];
  directors: string[] = ['Director #1 Name', 'Director #2 Name', 'Director #3 Name'];

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
