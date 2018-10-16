
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


//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component'
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


//routes
import {routes} from './routes';



//services
import { AuthService } from './services/auth/auth.service';
import { AddItemService } from './services/add/add-item.service';
import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CapitalizrPipe } from './pipes/capitalizr.pipe';
import { AddSongComponent } from './components/add-song/add-song.component';


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
    MzCollectionModule 
  ],
  providers: [AuthService, AddItemService, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
