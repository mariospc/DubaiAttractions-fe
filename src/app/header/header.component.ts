import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user;
  view = false
  constructor(
    private router:Router,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {   
    if (this.userService.getUserFromCookies() !== ''){     
        this.user = this.userService.getUserFromCookies().username;
    }
    
  }

  goHome() {
    const url = '/attractions/'
    this.router.navigate([url]);
  }

  logIn(){
    this.view = true;  
    // this.user = this.userService.getUserFromCookies().username;      
  }

  logOut(){
    this.spinner.show();
    this.userService.logOut().subscribe(response => {
      this.user = undefined;
      this.spinner.hide();
    })
  }

  submitLogIn(username){
    this.user = username;    
  }
}
