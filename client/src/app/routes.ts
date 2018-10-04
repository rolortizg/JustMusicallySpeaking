import {Routes} from '@angular/router'

//component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';



export const routes: Routes = [
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'add', component: AddItemComponent },
    { path: 'profile', component: UserProfileComponent }
    // {
    //   path: 'signup',
    //   component: SignupFormComponent
    // },
 

    
  ]

