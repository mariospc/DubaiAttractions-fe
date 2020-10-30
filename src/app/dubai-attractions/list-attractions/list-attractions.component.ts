import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-list-attractions',
  templateUrl: './list-attractions.component.html',
  styleUrls: ['./list-attractions.component.css'],
  providers: [NgbCarouselConfig]
})
export class listAttractionComponent implements OnInit {

  attractionList;
  constructor(
    private attractions:AttractionsService,
    config: NgbCarouselConfig,
    private spinner: NgxSpinnerService
    ) {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    this.attractions.getAttractions().subscribe(data =>{     
      this.attractionList = data;      
    }); 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    this.spinner.hide('spinner');
  }

  ngOnInit(): void {
    
  }

}
