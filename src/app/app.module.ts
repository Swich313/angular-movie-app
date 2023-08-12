import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { NotAuthComponent } from './components/not-auth/not-auth.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfitPipe } from './pipes/profit.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import {AppRoutesModule} from "./modules/app.routes";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HeaderDirective } from './directive/header.directive';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {HttpClientModule} from "@angular/common/http";
import {MoviesService} from "./services/movies.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
    DetailsActorsComponent,
    NotFoundComponent,
    FeedbackComponent,
    //Pipes
    ProfitPipe,
    //Directives
    HeaderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule{ }
