import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service'

// import { RouterModule } from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any
  paises: any[] = [];
  nuevasCanciones: any[] = [];

  constructor(private spotifyService: SpotifyService, private router: Router) { 

  
  this.spotifyService
  .getNewReleases()
  .subscribe( (dataResponse: any) => {
    this.nuevasCanciones = dataResponse.albums.items;
  });
  }
  ngOnInit() {
  }

}
