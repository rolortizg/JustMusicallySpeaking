import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import { AddItemService } from '../../services/add/add-item.service';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  songId : any;
  savedBy: any;
  userToken:any;
  songName: any;
  profSongs: Array<any>
  song:any;
  likeSong:any;
  songs : Array<any>;
  name: any;
  profUser:any
  profUserId:string = '';
  userId:string = '';
  listId:string = ';';
  list: {};
  user:any
  sameUser: boolean = false
  sameSongs: boolean = false
  artist: any = [];
  description: any;
  tracks: any = [];
  saved: any = [];
  track: any;
  show: boolean = false;
  buttonName: any = 'Search for Songs';
  

  listObj: any = {
    user: '',
    // songs:'',
    savedBy:'',
  }
  
  constructor(
    private spotifyService: SpotifyService, 
    private router: Router,
    private addService: AddItemService,
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private listService: ListService
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

  

  // searchForSongs(){
  //   this.addService.getSongs()
  //   .subscribe(songs => {
  //     this.songs = songs
  //   })
  // }

  
  

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide search";
    else
      this.buttonName = "Search for Songs";
  }
  

  ngOnInit() {
    this.userToken = JSON.parse(localStorage.getItem('userToken'))
   if(!this.userToken)this.router.navigate(['login'])
   
   
   this.activeRoute.params
       .subscribe(params=>{
      
      this.profUserId = params.id

    })

      this.authService.getOneUser(this.profUserId)
      .subscribe(user=>{
       console.log(user)
        this.profUser = user
        
        console.log(this.profUser)
      })

      this.authService.getLoggedUser()
      .subscribe(user=>{
        console.log(user)
        this.user = user;
        console.log(this.user)
        this.userId = user._id;
       
        if (this.userId === this.profUserId) {
          this.sameUser = true;
        }
        })

    
    this.addService.getSongs()
    .subscribe(songs => {
      this.listId = songs.user
      this.songId = songs.id
      this.songs = songs
      this.songName = songs.name;
      if (this.profUserId === this.listId) {
        this.sameSongs = true;
      }
    })

   
  }
//not ngINIt

addToList(){
    this.listObj.user = this.profUser;
    this.listObj.savedBy = this.profUser._id
   
  this.listService.createList(this.listObj)
  .subscribe( list => {
    this.list = list
    // this.savedBy = list.savedBy;
    let id = list._id;
    this.listId = id;
    this.profUser.songs.push(this.songs);
    
    
    
    
    
    console.log(this.profUser)
    this.updateUser(this.profUser);
    
    console.log(list) //try profUser
    // this.question['lawyer'] = this.lawyer.username
  })
}

// addToList(){
//   this.songObj.user = this.profUser._id;

 
// this.addSongService.addSong(this.songObj)
// .subscribe( song => {
//   let id = song._id;
//   this.songId = id;
//   this.profUser.songs.push(this.songId);
//   console.log(this.profUser.songs)
//   this.updateUser(this.profUser);
  
//   console.log(song)
//   // this.question['lawyer'] = this.lawyer.username
// })
// }

like(){
  this.addService.getOneSong(this.songId)
  .subscribe(song => {
    this.likeSong = song
    this.likeSong.likes++
    this.updateSong(this.likeSong)
  })
 
  
}

updateSong(song){
  this.addService.updateSong(this.song)
  .subscribe(()=>{
    console.log(this.song)
  })
}

updateUser(user){
  this.authService.updateUser(this.user)
  .subscribe(()=>{
    console.log(this.user)
    // this.router.navigate(['city-survey', this.listId]);
  })

 

}
  

}
