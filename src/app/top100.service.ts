import {Movie} from './movie';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Top100Service {
  private topratedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0dd95a8174a2e1bf2bd5605ad9c8a611&language=en-US&page=1';
  constructor(private http: Http) { }
  getToprated() {
    return  this.http.get(this.topratedUrl)
      .map(res => <Movie[]> res.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }
}
