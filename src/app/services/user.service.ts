import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  user;
  constructor(
    private httpClient:HttpClient,
    private cookieService:CookieService
    ) { 
      
    }
  userServicePref = '/api/users/'

  logIn(body){
    this.user = this.httpClient.post(`${this.userServicePref}login`, body);
    return this.user;
  }
  
  logOut(){
    this.cookieService.delete( 'user');
    return this.httpClient.get(`${this.userServicePref}logout`)
  }

  getUserFromCookies(){
    return JSON.parse(this.cookieService.get('user'));
  }

  setUserCookiee(user){
    this.cookieService.set( 'user', JSON.stringify(user));
  }
}
