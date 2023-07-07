import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges{
  public searchMovieTitle = ''

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.searchMovieTitle);
  }

  toggleMode(event: Event) {
    const isChecked = (<HTMLInputElement>event.target).checked;
    const htmlEl =  document.getElementsByTagName('html')[0];
    if(isChecked)
    {
      htmlEl.setAttribute('data-bs-theme', 'dark')
    } else {
      htmlEl.setAttribute('data-bs-theme', 'light')
    }
  }

}
