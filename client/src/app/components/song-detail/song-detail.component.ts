import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AddItemService } from '../../services/add/add-item.service';
import {AuthService} from '../../services/auth/auth.service'


@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  id: any;
  userSongId:any = []
  song: any;
  user:any;
  liked: boolean = false

  constructor(
    private addSongService: AddItemService,
    private activeRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  like(){
   if (this.user._id == this.userSongId)
   return console.log("Not allowed son, already liked it")
   else {
    this.song.likes++
    console.log(this.song.likes)
    this.updateSong(this.song)
    this.getLiked()
   }
    
    


  }
  getLiked(){
    this.user.liked.push(this.song)
    this.updateUser()
  }

  updateUser(){
    this.authService.updateUser(this.user)
    .subscribe(()=>{
      console.log(this.user)
      // this.router.navigate(['city-survey', this.listId]);
    })
  }

  updateSong(song){
    this.addSongService.updateSong(this.song)
    .subscribe((song)=>{
      
      // this.song.likes +=1
    })
    console.log(this.song)
  }

  ngOnInit() {

    this.activeRoute.params
    .subscribe(params=>{
      console.log(params.id)
      this.id = params.id
      
      this.addSongService.getOneSong(this.id)
      .subscribe(song=>{
  //      console.log(phone)
        this.song = song
        console.log(this.song)
      })
    })

    this.authService.getLoggedUser()
      .subscribe(user=>{
        console.log(user)
        this.user = user;
        this.userSongId = user.liked[0].id
        console.log(this.userSongId)
        
        })
     if(this.user.liked.includes(this.id)){
        console.log("You've already liked it")
        this.liked = true
     }else{
       this.liked = false
     }

  }

}
