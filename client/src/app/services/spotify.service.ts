import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  token = 'BQA7R67TyzA16eivZpRHASjMIjfXQEnD35izEf3CoyJHuxsdgj_M8lMEbcKd5kIE99RYtl1ltqVoaQ5uz0qSw9pKh9XAVGE3Uu9fOV31TlM6eXiu7r6zrh0t7JTeniy8Sx2wRRuXnbylwki5ig';

  constructor(private http: HttpClient) {
    this.getNewReleases();
  }

  getQuery(query: String){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.token}`
    });

    return this.http.get(url, {headers});
  }
  
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
        .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
        .pipe(map(data => data['artists'].items));
  }
}