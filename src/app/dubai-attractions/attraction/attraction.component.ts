import { Component, OnInit, Input } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.css']
})
export class AttractionComponent implements OnInit {

  constructor(private attractions:AttractionsService){
    // console.log(id);
    
  }
  ngOnInit(): void {
  }

  
}
