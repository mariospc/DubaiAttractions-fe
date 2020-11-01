import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, HostListener, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() display;
  @Output() userLogIn = new EventEmitter<string>();
  message;
  incorrectData;
  constructor(
    private eRef: ElementRef,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    ){

    }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {    
    if(this.eRef.nativeElement.contains(event.target)) {
      this.display = true;
    } else {      
      if(event.target.id == 'logIn'){
        this.display = true;
      }else {
        this.display = false;
      }
    }
    
  }

  submitLogIn(data){
    this.spinner.show()    
    this.userService.logIn(data).subscribe(response =>{      
      this.incorrectData = false;
      this.display = false;
      this.userLogIn.emit(response['user'].username);
      this.userService.setUserCookie(response['user']);
      this.spinner.hide();
    }, 
    (error: HttpErrorResponse) =>{
      this.incorrectData = true
      this.spinner.hide();
    })
  }

}
