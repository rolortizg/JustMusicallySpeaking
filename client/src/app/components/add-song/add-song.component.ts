import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AddItemService } from '../../services/add/add-item.service'
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list/list.service'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  song = {};
  songs: Array<any>;
  name: string;
  artist:string;
  description:string;
  likes: number;
  image:string;
  songId:any;
  user:any;
  userId:any;
  profUserId:any;
  profUser:any;
  userToken:any;

  songObj: any = {
    user: '',
    
  }

  constructor(
    private addSongService: AddItemService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private listService: ListService,
    private authService: AuthService
  ) { }

  addToList(){
    this.songObj.user = this.profUser._id;
  
   
  this.addSongService.addSong(this.songObj)
  .subscribe( song => {
    this.router.navigate(['/profile/', this.userToken._id])
    let id = song._id;
    this.songId = id;
    this.profUser.songs.push(this.songId);
    console.log(this.profUser.songs)
    this.updateUser(this.profUser);
    
    console.log(song)
    
    // this.question['lawyer'] = this.lawyer.username
  })
}


like(){
  
}

  addItem(){
    this.addSongService.addSong(this.song)
    .subscribe( item => {
      this.song = item
      // this.router.navigate(['profile'])
      // this.question['lawyer'] = this.lawyer.username
      console.log(item)
    })
   
   
      // this.question['lawyer'] = this.lawyer.username
    
  }
  
  updateUser(user){
    this.authService.updateUser(this.profUser)
    .subscribe(()=>{
      // this.router.navigate(['city-survey', this.listId]);
    })
  }

  ngOnInit() {
    this.userToken = JSON.parse(localStorage.getItem('userToken'))
   
      
      

    // this.route.params.subscribe()
    this.activeRoute.parent.params
    .subscribe(params=>{
      this.profUserId = params.id;
      console.log(params)
    })
    this.authService.getOneUser(this.profUserId)
    .subscribe(user=>{
      this.profUser = user;
      console.log(this.profUser)
    })
    this.authService.getLoggedUser()
    .subscribe(user=>{
      this.user = user;
      this.userId = user._id;
      console.log(user)
      // if (this.userId === this.profUserId) {
      //   this.sameUser = true;
      // }
      })
    }
  

}
