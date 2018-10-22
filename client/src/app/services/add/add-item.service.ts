import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  url = "http://localhost:3000/add/song/";
  id : any;
  user: any;
  constructor(private http: Http) { }

  addSong(add): Observable<any>{
    return this.http.post(this.url ,add)
    .pipe(map((res:Response)=>res.json()))
  }
  
  createList(list): Observable<any>{
    return this.http.post(this.url, list)
    .pipe(map((res: Response)=>res.json()))
  }
  getSongs(): Observable<any>{
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json()))
  }
}
