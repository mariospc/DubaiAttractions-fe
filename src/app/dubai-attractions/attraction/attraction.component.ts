import { Component, OnInit, Input } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.css']
})
export class AttractionComponent implements OnInit {

  @Input() attractionItem
  constructor(
    private router: Router,
    public userService: UserService
    ){
    
  }
  ngOnInit(): void {
  }

  onClickDetailsButton(attraction){        
    const url = '/attractions/' + attraction.objectId
    this.router.navigate([url]);
  }
  
}
