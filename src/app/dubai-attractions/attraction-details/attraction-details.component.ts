import { Component, OnInit } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';
import { ActivatedRoute } from '@angular/router';
import { AgmCoreModule } from '@agm/core'
@Component({
  selector: 'app-attraction-details',
  templateUrl: './attraction-details.component.html',
  styleUrls: ['./attraction-details.component.css'],
  // providers: [ AgmCoreModule ]
})
export class AttractionDetailsComponent implements OnInit {
  attractionItem;
  lat = 55.186147;
  lng = 25.141975;
  googleMapType = 'satellite';
  constructor(
    private activatedRoute:ActivatedRoute,
    private attractionsService: AttractionsService) {
      this.activatedRoute.paramMap.subscribe(data=>{
        const id = data.get('id');      
        this.attractionsService.getAttractionByID(id).subscribe(data =>{    
          console.log(data);
          
          this.attractionItem = data;
          // this.lat = this.attractionItem[0];
          // this.lng = this.attractionItem[1];
        }); 
        
      })
     }

  ngOnInit(): void {
    
  }

}
