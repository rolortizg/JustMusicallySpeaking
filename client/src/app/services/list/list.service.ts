import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  url = "http://localhost:3000/list/"
  currentCity: String = ''

  constructor(private http: Http) { }

  createList(list): Observable<any>{
    return this.http.post(this.url + 'profile', list)
    .pipe(map((res: Response)=>res.json()))
  }
}
