import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  // BQD9F_DmUBzZ48VNPJDRdQrotrngL5ioz9DeVrBRPtvnF5pllniR8qliMRo1YUTPqh4evHCIsvSlnU4Ifmjas4rRNKDaxpNCVZDxxl0haa-_M8CUHyraquqXWStqA13Arz2JqtHsut0AH48f5w
  token = 'BQAVqSLizCn_emwwGSrQVe5JwAmWB-LoXbIkxIjqKtiCGEWgFjgb8NQKnCQLBuxCTBXeAX46F-kJZ8g3lL_P5khCLvAiKQ0qWIKOzFbG_SR1hKkQNllkvG8o0cmjOMGv6gzRuYdSi1_88KQekQ';

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