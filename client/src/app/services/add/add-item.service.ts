import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  url = "http://localhost:3000/add/";
  id : any;
  user: any;
  constructor(private http: Http) { }

  addSong(add): Observable<any>{
    return this.http.post(this.url + 'song',add)
    .pipe(map((res:Response)=>res.json()))
  }
  
  
  getSongs(): Observable<any>{
    return this.http.get(this.url + 'song')
    .pipe(map((res:Response)=>res.json()))
  }

  
  getOneSong(id){
    return this.http.get(this.url + id)
        .pipe(map((res: Response)=>res.json()));                                
  }

  updateSong(song) {
    return this.http.put(this.url + song._id, song)
    .pipe(map((res: Response)=>res.json()))
  }

  
}
