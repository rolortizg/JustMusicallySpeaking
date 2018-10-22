import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:any
  account:any;
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
    private router: Router,
    private activeRoute: ActivatedRoute
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
      localStorage.setItem('userToken', JSON.stringify(user));
      var id = this.user._id
      this.router.navigate(['/profile/', id]);
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

//   this.authService.getOneUser(this.user)
//   .subscribe(account=>{
// //      console.log(phone)
//     this.account = account
//     console.log(account)

//     })

    //Aqui esta mi problem
    this.user = JSON.parse(localStorage.getItem('userToken'))
    if(localStorage.getItem('userToken')){
      
      this.router.navigate(['/profile/', this.user._id])
    }
  
  }

}
