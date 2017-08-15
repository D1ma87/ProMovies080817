import {GenreClass} from './genreclass';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GenreService {
  private genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0dd95a8174a2e1bf2bd5605ad9c8a611&language=en-US)';
  constructor(private http: Http) { }
  getGenres() {
    return  this.http.get(this.genreUrl)
      .map(res => <GenreClass[]> res.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }
}
