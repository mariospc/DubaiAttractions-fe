import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
// import { AttractionComponent } from '../dubai-attractions/attraction/attraction.component';

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
    // private attractionComponent: AttractionComponent
    ) { }

  ngOnInit(): void {       
    if (JSON.parse(this.userService.getUserFromCookies('user')) !== undefined){     
      this.user = JSON.parse(this.userService.getUserFromCookies('user')).username;
    }
  }

  goHome() {
    const url = '/attractions/'
    this.router.navigate([url]);
  }

  logIn(){
    this.view = true;  
    // this.attractionComponent.ngOnInit();
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
