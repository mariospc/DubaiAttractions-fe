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

  imgUrl= "//placehold.it/250";
  image: File;
  @Input() attractionItem
  constructor(
    private router: Router,
    public userService: UserService
    ){
    
  }
  ngOnInit(): void {       

    if (this.attractionItem.photo !== undefined){
      this.imgUrl = this.attractionItem.photo.url;
    }
  }

  onClickDetailsButton(attraction){        
    const url = '/attractions/' + attraction.objectId
    this.router.navigate([url]);
  }

  onClicUpdateButton(attraction){        
    const url = '/attractions/update/' + attraction.objectId
    this.router.navigate([url]);
  }
  
}
