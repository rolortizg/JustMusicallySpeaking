import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hasAccount: boolean = true
  name:string = ''
  lastName:string = ''
  email: string = ''
  password: string = ''
  username: string = ''
  auth: any = {
    name:'',
    lastName:'',
    username: '',
    email: '',
    password: '',
    // products: [],
  } //object used for all authentication
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  handleLogin(){
    this.auth.email = this.email;
    this.auth.name = this.name;
    this.auth.lastName = this.lastName;
    this.auth.username = this.username;
    this.auth.password = this.password;
    this.authService.login(this.auth)
    .subscribe(user=>{
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['home']);
      // this.router.navigate(['home', this.user._id]);
    })

  }

  // login(){
  //   this.authService.login(this.auth)
  //   .subscribe(user => {
  //     this.user = user
  //     localStorage.setItem('user', JSON.stringify(this.user))
  //     this.router.navigate(['profile'])
  //   })
  // }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['home'])
    }
  }

}
