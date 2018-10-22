import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-explore-users',
  templateUrl: './explore-users.component.html',
  styleUrls: ['./explore-users.component.css']
})
export class ExploreUsersComponent implements OnInit {
  users: Array<any>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getUsers()
    .subscribe(users =>{
      this.users = users
    })

  }

}
