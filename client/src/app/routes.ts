import {Routes} from '@angular/router'

//component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddSongComponent } from './components/add-song/add-song.component'
import { ExploreUsersComponent } from './components/explore-users/explore-users.component';
import {SongDetailComponent} from './components/song-detail/song-detail.component'
import {EditUserComponent} from './components/edit-user/edit-user.component'


export const routes: Routes = [
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { 
      path: 'profile/:id', 
      component: UserProfileComponent,
      children:[
        {
            path:'add',
            component:AddSongComponent,
            
        },
        {
          path:'edit',
          component:EditUserComponent,
          
      }
      ]
    },
    { path: 'explore/users', component: ExploreUsersComponent },
    { path: 'song/:id', component: SongDetailComponent },

    // {
    //   path: 'signup',
    //   component: SignupFormComponent
    // },
 

    
  ]

