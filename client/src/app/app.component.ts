import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';
  user: any;

  
  logout(){
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userToken'))
  }
  
}
