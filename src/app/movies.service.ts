import {GenreClass} from './genreclass';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Movie} from './movie';

@Injectable()
export class MoviesService {
  movies: Observable<Movie[]>;
  private moviesUrl;
  cont: number;
  constructor(private http: Http) { }
  // funcion para saber el nr de paginas
  getPages(id: string) {
    this.moviesUrl = 'https://api.themoviedb.org/3/genre/genre_id' +
      '/movies?api_key=0dd95a8174a2e1bf2bd5605ad9c8a611&language=en-US&include_adult=false&sort_by=created_at.as&page=1';
    this.moviesUrl = this.moviesUrl.replace('genre_id', id );
    return this.http.get(this.moviesUrl)
      .map(res => <Movie[]> res.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }
  getMovies(id: string, i: any) {
    this.getPages(id).subscribe(movies => {this.cont = +movies.total_pages;
      console.log(this.cont);
    });
      this.moviesUrl = 'https://api.themoviedb.org/3/genre/genre_id' +
        '/movies?api_key=0dd95a8174a2e1bf2bd5605ad9c8a611&language=en-US&include_adult=false&sort_by=created_at.as&page=' + i.toString();
      this.moviesUrl = this.moviesUrl.replace('genre_id', id );
      this.movies = (this.http.get(this.moviesUrl)
        .map(res => <Movie[]> res.json()));
      return  this.movies
        .catch(error => {
          console.log(error);
          return Observable.throw(error);
        });
  }
  // get a movie by id
  getMovie(id: number, genre: number, pages: any): Observable<Movie[]> {
    return this.getMovies(genre.toString(), pages).map(movies => movies.results.find(movie => movie.id === id));
  }
}
