import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:any;
  user:any;
  userToken:any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  editOneUser(){
    this.authService.updateUser(this.user)
    .subscribe(()=>{
      console.log(this.user)
    })
  }

  ngOnInit() {
    this.userToken = JSON.parse(localStorage.getItem('userToken'))
    if(!this.userToken)this.router.navigate(['login'])

    this.id = this.activatedRoute.parent.snapshot.params.id
    
    this.authService.getOneUser(this.id)
    .subscribe(user=>{
      this.user = user
      console.log(this.user)
    })
    
  }




}
