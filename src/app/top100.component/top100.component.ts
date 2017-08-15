import {Component, Injectable, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {Http} from '@angular/http';
import {Movie} from '../movie';
import {Observable} from 'rxjs/Observable';
import {Top100Service} from '../top100.service';



@Component({
  selector: 'app-top100',
  templateUrl: './top100.component.html',
  providers: [Http],
  styleUrls: ['./top100.component.css']
})
@Injectable()
export class Top100Component implements OnInit {
  title = 'Top 100';
  movie: Movie;
  movies: Observable<Movie[]>;
  constructor(
    private router: Router,
    private top100Service: Top100Service,
    ) {}
  getToprated(): void {
    this.top100Service.getToprated().subscribe(movies => {
      this.movies = movies.results;
      console.log(this.movies);
    });
  }
  ngOnInit(): void {
    this.getToprated();
  }
}
