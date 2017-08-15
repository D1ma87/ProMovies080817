import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {GenresComponent} from './genres.component/genres.component';
import {RouterModule} from '@angular/router';
import {GenreService} from './genre.service';
import {FormsModule} from '@angular/forms';
import {MoviesService} from './movies.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MovieComponent} from './movie.component/movie.component';
import {Top100Service} from './top100.service';
import {Top100Component} from './top100.component/top100.component';
@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    MovieComponent,
    Top100Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'genres',
        component: GenresComponent
      },
      {
        path: 'movie/:id/:genre/:page',
        component: MovieComponent
      },
      {
        path: 'top100',
        component: Top100Component
      },
    ])
  ],
  providers: [GenreService, MoviesService, GenresComponent, Top100Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
