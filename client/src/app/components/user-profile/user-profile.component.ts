import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:any
  artistas: any = [];
  tracks: any = [];
  saved: any = [];
  track: any;
  show: boolean = false;
  buttonName: any = 'Search for Songs';
  
  constructor(private spotifyService: SpotifyService, private router: Router) { 
    
  }

  buscar(termino: string) {
    this.spotifyService
        .getArtista(termino)
        .subscribe( dataResponse => {
            this.artistas = dataResponse;
        });
  }
  buscarCancion(term: string) {
    this.spotifyService
        .getTracks(term)
        .subscribe( datares => {
            this.tracks = datares;
        });
  }

  addToList(item){
    this.saved.push(item)
    console.log(this.saved)
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide search";
    else
      this.buttonName = "Search for Songs";
  }
  

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userToken'))
   if(!this.user)this.router.navigate(['login'])
  }

}
