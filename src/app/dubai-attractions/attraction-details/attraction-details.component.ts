import { Component, OnInit} from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-attraction-details',
  templateUrl: './attraction-details.component.html',
  styleUrls: ['./attraction-details.component.css'],
  // providers: [ AgmCoreModule, ShareButtonsModule ]
})
export class AttractionDetailsComponent implements OnInit {
  show = true;
  attractionItem;
  objectId = '';
  lat;
  lng;
  mapTypeId = 'terrain';
  title = '';
  short_info = '';
  description = '';
  url = '';
  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;
  successMessage = false;
  failureMessage = false;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private attractionsService: AttractionsService,
    private spinner: NgxSpinnerService,
    private userService: UserService
    ) {
      
      this.activatedRoute.paramMap.subscribe(data=>{
        const id = data.get('id');      
        this.attractionsService.getAttractionByID(id).subscribe(data =>{             
          this.objectId = data['objectId']                
          this.title = data['title'];
          this.short_info = data['short_info'];
          this.description = data['description'];
          this.url = data['url'];
          
          this.lng = data['location'][0];
          this.lat = data['location'][1];
          this.spinner.hide();     

        });    
      });      
     }

  ngOnInit(): void {
    this.spinner.show();
  }

  UpdateAttraction(){
    this.spinner.show();
    const body = {
      attraction_id: this.objectId,
      title: this.title,
      url: this.url,
      colaction: [this.lng, this.lat],
      short_info: this.short_info,
      description: this.description,
    }

    this.attractionsService.updateAttraction(body).subscribe(data =>{
      this.spinner.hide();
      this.successMessage = true;
    //   setTimeout(function () { 
    //     this.successMessage = false;
    // }, 2000); 
    });
    
  }
}
