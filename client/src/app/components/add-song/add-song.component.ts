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

  listObj: any = {
    user: '',
    listName: '',
    
  }

  constructor(
    private addSongService: AddItemService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private listService: ListService,
    private authService: AuthService
  ) { }

  addToList(){
    this.listObj.user = this.user;
   
  this.listService.createList(this.listObj)
  .subscribe( list => {
    let id = list._id;
    this.songId = id;
    this.user.songs.push(this.songId);
    console.log(this.user.songs)
    this.updateUser(this.user);
    
    console.log(list)
    // this.question['lawyer'] = this.lawyer.username
  })
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
    this.authService.updateUser(this.user)
    .subscribe(()=>{
      // this.router.navigate(['city-survey', this.listId]);
    })
  }

  ngOnInit() {
    // this.route.params.subscribe()
    this.activeRoute.params
    .subscribe(params=>{
      this.profUserId = params.id;
    })
    this.authService.getOneUser(this.profUserId)
    .subscribe(user=>{
      this.profUser = user;
    })
    this.authService.getLoggedUser()
    .subscribe(user=>{
      this.user = user;
      this.userId = user._id;
      // if (this.userId === this.profUserId) {
      //   this.sameUser = true;
      // }
      })
    }
  

}
