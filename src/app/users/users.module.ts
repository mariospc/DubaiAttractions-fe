import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ProfileComponent
  ]
})
export class UsersModule { }
