import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  color: ThemePalette = 'accent';
  checked = true;
  disabled = true;
}
