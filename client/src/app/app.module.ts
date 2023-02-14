import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { UsersService } from './_services/usuario.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    UserDetailsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({})
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
