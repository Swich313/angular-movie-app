import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isVisible = true

  fanFavouriteMovies: any[] = [
    {
      id: '1',
      imageUrl: '../../../assets/images/Book5.jpg',
      title: 'Movie #1 Title',
      actors: 'Movie #1 actors',
      year: '2023',
      rate: 9.5,
      rank: 1
    },
    {
      id: '2',
      imageUrl: '../../../assets/images/Book5.jpg',
      title: 'Movie #2 Title',
      actors: 'Movie #2 actors',
      year: '2023',
      rate: 9.2,
      rank: 3
    },
    {
      id: '3',
      imageUrl: '../../../assets/images/Book5.jpg',
      title: 'Movie #3 Title',
      actors: 'Movie #3 actors',
      year: '2023',
      rate: 9.3,
      rank: 2
    },
    {
      id: '4',
      imageUrl: '../../../assets/images/Book5.jpg',
      title: 'Movie #4 Title',
      actors: 'Movie #4 actors',
      year: '2023',
      rate: 9.4,
      rank: 6
    },
  ]

  topMovies: any[] = [
    {
      id: 't1',
      imageUrl: '../../../assets/images/Book5.jpg',
      title: 'Movie #1 Title',
      description: 'Movie #1 description',
      year: '2023',
    },
    {
      id: 't2',
      imageUrl: '../../../assets/images/Book5.jpg',
      title: 'Movie #2 Title',
      description: 'Movie #2 description',
      year: '2023',
    },
    {
      id: 't3',
      imageUrl: '../../../assets/images/Book5.jpg',
      title: 'Movie #3 Title',
      description: 'Movie #3 description',
      year: '2023',
    },
  ]

  // currentStyles: Record<string, string> = {};
  // isCentered = false;
  // isSuccess = false;
  // isLarge = true;
  // constructor() {
  //   this.currentStyles = {
  //     'text-align': this.isCentered ? 'center' : '',
  //     'color': this.isSuccess ? 'green' : 'red',
  //     'font-size': this.isLarge ? 'large' : 'small'
  //   }

}
