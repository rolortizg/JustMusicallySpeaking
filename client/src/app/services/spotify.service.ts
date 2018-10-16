import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  // BQD9F_DmUBzZ48VNPJDRdQrotrngL5ioz9DeVrBRPtvnF5pllniR8qliMRo1YUTPqh4evHCIsvSlnU4Ifmjas4rRNKDaxpNCVZDxxl0haa-_M8CUHyraquqXWStqA13Arz2JqtHsut0AH48f5w
  token = 'BQA6XqwpdI2QOMlep7i9KIpwu6QgeGKWJqAKOuY327UEPDVDr0aiK2_xjOv4IzlNGUfct5_hnbdFLEjwO7xHbg_L5kV5qIQj2wVse63QSAmoe2RyKMYsHpXqHGnRtzrtjz-hVAcCUrW1QFj-Hg';

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
        .pipe(map(data => data['album'].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=3`)
        .pipe(map(data => data['artists'].items));
  }
  getTracks(term: any){
    return this.getQuery(`search?q=${term}&type=track&market=ES&limit=9&offset=5`)
        .pipe(map(data => data['tracks'].items));

  }


  // getArtista(termino: string) {
  //   return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
  //       .pipe(map(data => data['artists'].items));
  // }
}