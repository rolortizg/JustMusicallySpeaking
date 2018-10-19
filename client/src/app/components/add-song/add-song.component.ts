import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AddItemService } from '../../services/add/add-item.service'
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private addSongService: AddItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  addItem(){
    return this.addSongService.addSong(this.song)
    .subscribe( item => {
      this.song = item
      this.router.navigate(['profile'])
      // this.question['lawyer'] = this.lawyer.username
    })
  }

  ngOnInit() {
    // this.route.params.subscribe()
  }

}
