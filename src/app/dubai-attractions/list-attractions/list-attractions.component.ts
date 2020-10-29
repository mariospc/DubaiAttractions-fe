import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttractionsService } from '../../services/attractions.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

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
    private router : Router,
    config: NgbCarouselConfig
    ) {
    this.attractions.getAttractions().subscribe(data =>{     
      this.attractionList = data;
    }); 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

  onClickDetailsButton(attraction){
    const url = '/attractions/' + attraction.title
    this.router.navigate([url]);
  }
}
