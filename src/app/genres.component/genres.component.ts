import {Component, Injectable, OnInit} from '@angular/core';
import {GenreClass} from '../genreclass';
import {GenreService} from '../genre.service';
import {Route, Router} from '@angular/router';
import {Http} from '@angular/http';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie';
import {Observable} from 'rxjs/Observable';




@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  providers: [Http],
  styleUrls: ['./genres.component.css']
})
@Injectable()
export class GenresComponent implements OnInit {
  title = 'Genres';
  pages: number[];
  selectedGenre: GenreClass;
  genres: GenreClass[];
  movies: Observable<Movie[]>;
  constructor(
    private router: Router,
    private genreService: GenreService,
    private moviesService: MoviesService) {}
  getGenres(): void {
    this.genreService.getGenres().subscribe(genres => {
      this.genres = genres.genres;
      console.log(this.genres);
    });
  }
  ngOnInit(): void {
    this.getGenres();
  }
  onSelect(genre: GenreClass): void {
    this.selectedGenre = genre;
    this.movies = null;
    this.getMovies();
  }
  getMovies(): void {
      this.moviesService.getPages(this.selectedGenre.id.toString()).subscribe(movies => {
        this.movies = movies.results;
        // busqueda por pagina?
        for (let i = 0; i < movies.results.size; i++) {
          this.pages.push(1);
        }
        console.log(this.movies);
      });
      for (let page = 2; page < 50; page++) {
        this.moviesService.getMovies(this.selectedGenre.id.toString(), page).subscribe(movies => {
          if (movies.results != null) {
            this.movies = this.movies.concat(movies.results);
            // preguntar como agregar paginas para la busqueda
            for (let i = 0; i < movies.results.size; i++) {
              this.pages.push(page);
            }
            console.log(this.movies);
          }
        });
      }
    console.log(this.movies);
  }

}
