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
  
  constructor(private spotifyService: SpotifyService, private router: Router) { }

  buscar(termino: string) {
    this.spotifyService
        .getArtista(termino)
        .subscribe( dataResponse => {
            this.artistas = dataResponse;
        });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userToken'))
   if(!this.user)this.router.navigate(['login'])
  }

}
