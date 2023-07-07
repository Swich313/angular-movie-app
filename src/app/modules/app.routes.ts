import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {DetailsComponent} from "../components/details/details.component";
import {DetailsActorsComponent} from "../components/details-actors/details-actors.component";
import {DetailsMoviesComponent} from "../components/details-movies/details-movies.component";
import {DetailsReviewsComponent} from "../components/details-reviews/details-reviews.component";
import {SearchComponent} from "../components/search/search.component";
import {FormsModule} from "@angular/forms";
import {NotFoundComponent} from "../components/not-found/not-found.component";
import {FeedbackComponent} from "../components/feedback/feedback.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'details/actors/:id', component: DetailsActorsComponent},
  {path: 'details/movies/:id', component: DetailsMoviesComponent},
  {path: 'details/reviews/:id', component: DetailsReviewsComponent},
  {path: 'feedback', component: FeedbackComponent},
  //START NESTED ROUTES
  // {path: 'details/:id',
  //   component: DetailsComponent,
  //   children: [
  //     { path: 'actors', component: DetailsActorsComponent},
  //     {path: 'movies', component: DetailsMoviesComponent},
  //     {path: 'reviews', component: DetailsReviewsComponent}
  //   ]},
  //END NESTED ROUTES
  {path: 'search/:movieTitle', component: SearchComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})

export class AppRoutesModule {}
