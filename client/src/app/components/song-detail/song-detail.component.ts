import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AddItemService } from '../../services/add/add-item.service';@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  id: any;
  song: any;

  constructor(
    private addSongService: AddItemService,
    private activeRoute: ActivatedRoute
  ) { }

  like(){
    this.song.likes +=1
    console.log(this.song.likes)
    this.updateSong(this.song)

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
      })
    })
  }

}
