
//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MzButtonModule, MzInputModule, MzDropdownModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { MzCollectionModule } from 'ngx-materialize'
import { MzModalModule } from 'ngx-materialize'


//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component'
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { ExploreUsersComponent } from './components/explore-users/explore-users.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';

//routes
import {routes} from './routes';



//services and pipes
import { AuthService } from './services/auth/auth.service';
import { AddItemService } from './services/add/add-item.service';
import { SpotifyService } from './services/spotify.service';
import { ListService } from './services/list/list.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CapitalizrPipe } from './pipes/capitalizr.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AddItemComponent,
    UserProfileComponent,
    NoimagePipe,
    CapitalizrPipe,
    AddSongComponent,
    ExploreUsersComponent,
    SongDetailComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MzButtonModule, 
    MzInputModule,
    MzDropdownModule,
    MzSidenavModule,
    MzCollectionModule,
    MzModalModule 
  ],
  providers: [AuthService, AddItemService, SpotifyService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
