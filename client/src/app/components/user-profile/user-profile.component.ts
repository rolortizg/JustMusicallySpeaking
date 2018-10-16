import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import { AddItemService } from '../../services/add/add-item.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  song : any;
  name: any;
  user:any
  artist: any = [];
  description: any;
  tracks: any = [];
  saved: any = [];
  track: any;
  show: boolean = false;
  buttonName: any = 'Search for Songs';
  
  constructor(
    private spotifyService: SpotifyService, 
    private router: Router,
    private addService: AddItemService
  ) { 
    
  }

  buscar(termino: string) {
    this.spotifyService
        .getArtista(termino)
        .subscribe( dataResponse => {
            this.artist = dataResponse;
        });
  }
  buscarCancion(term: string) {
    this.spotifyService
        .getTracks(term)
        .subscribe( datares => {
            this.tracks = datares;
        });
  }

  addToList(){
    return this.addService.addSong(this.song)
    .subscribe( item => {
      this.song = item
      this.artist = item.artist
      this.name = item.name
      console.log(item)
      // this.question['lawyer'] = this.lawyer.username
    })
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
