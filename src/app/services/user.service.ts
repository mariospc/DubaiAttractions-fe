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

  getUserFromCookies(param){
    if (this.cookieService.get(param) == ''){
      return undefined;
    }    
    return this.cookieService.get(param);
  }

  setUserCookie(user){
    console.log(user.username);
    
    this.cookieService.set( 'user', JSON.stringify(user));
    this.cookieService.set( 'name', user.username);
  }

  isAdmin(){    
    if (this.getUserFromCookies('user') === undefined){     
      return false;
    }else if (JSON.parse(this.getUserFromCookies('user')).username !== 'admin') {
      return false;
    }else {
      return true;
    }
  }
}
