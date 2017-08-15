import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {MoviesService} from '../movies.service';
import 'rxjs/add/operator/switchMap';
import {GenresComponent} from '../genres.component/genres.component';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie[];
  constructor (
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location,
    private genresComponent: GenresComponent
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.moviesService.getMovie(+params.get('id'), +params.get('genre'), +params.get('page')))
      .subscribe(movie => this.movie = movie);
  }
  goBack(): void {
    this.location.back();
  }
}
