import { Component, OnInit, Input } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';

@Component({
  selector: 'app-get-one-attraction',
  templateUrl: './get-one-attraction.component.html',
  styleUrls: ['./get-one-attraction.component.css']
})
export class GetOneAttractionComponent implements OnInit {

  constructor(private attractions:AttractionsService){
    // console.log(id);
    
  }
  ngOnInit(): void {
  }

  
}
