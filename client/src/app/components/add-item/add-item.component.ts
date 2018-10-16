import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AddItemService } from '../../services/add/add-item.service'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item = {};
  title: string;
  description:string;
  category:string;
  size:number;
  buys:number;
  image:string;




  constructor(
    private addItemService: AddItemService
  ) { }

  ngOnInit() {
  }

  addItem(){
    return this.addItemService.addSong(this.item)
    .subscribe( item => {
      this.item = item
      // this.question['lawyer'] = this.lawyer.username
    })
  }



}
