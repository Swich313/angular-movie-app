import { Component } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css']
})
export class DetailsActorsComponent {
  movieActors: any[] = [
    {
      imageUrl: '../../../assets/images/img.png',
      name: 'Actor #1 name',
      role: 'Role #1'
    },
    {
      imageUrl: '../../../assets/images/img.png',
      name: 'Actor #2 name',
      role: 'Role #2'
    },
    {
      imageUrl: '../../../assets/images/img.png',
      name: 'Actor #3 name',
      role: 'Role #3'
    },
    {
      imageUrl: '../../../assets/images/img.png',
      name: 'Actor #4 name',
      role: 'Role #4'
    },
    {
      imageUrl: '../../../assets/images/img.png',
      name: 'Actor #5 name',
      role: 'Role #5'
    },
    {
      imageUrl: '../../../assets/images/img.png',
      name: 'Actor #6 name',
      role: 'Role #6'
    },
    {
      imageUrl: '../../../assets/images/img.png',
      name: 'Actor #7 name',
      role: 'Role #7'
    },
  ];
}
