import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from './services/auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';
  user: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ){

  }
  
  logout(){
    this.authService.logout();
    
    
    
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userToken'))
    
  }
  
}
