import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:3000/auth/";
  id : any;
  constructor(
    private http: Http
  ) { }

  signup(auth): Observable<any>{

    return this.http.post(this.url + 'signup', auth)
    .pipe(map(res=>res.json()))
  }

  login(auth): Observable<string>{
    return this.http.post(this.url + 'login', auth)
    .pipe(map(res=>res.json()))
  }

  getUsers(): Observable<any>{
    return this.http.get(this.url + 'users')
    .pipe(map((res:Response)=>res.json()))
  }

  getOneUser(id){
    return this.http.get(this.url + id)
        .pipe(map((res: Response)=>res.json()));                                
  }


  // , {withCredentials:true}
}

