import { Component, OnInit } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';


@Component({
  selector: 'app-attraction-details',
  templateUrl: './attraction-details.component.html',
  styleUrls: ['./attraction-details.component.css'],
  // providers: [ AgmCoreModule, ShareButtonsModule ]
})
export class AttractionDetailsComponent implements OnInit {
  show=true;
  attractionItem;
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
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private attractionsService: AttractionsService,
    private spinner: NgxSpinnerService
    ) {
      
      this.activatedRoute.paramMap.subscribe(data=>{
        const id = data.get('id');      
        this.attractionsService.getAttractionByID(id).subscribe(data =>{                   
          // this.attractionItem = data;
          this.title = data['title'];
          this.short_info = data['short_info'];
          this.description = data['description'];
          this.url = data['url'];
          
          this.lat = data['location'][1];
          this.lng = data['location'][0];
          this.spinner.hide();     

        });    
      });      
     }

  ngOnInit(): void {
    this.spinner.show();
  }

}
