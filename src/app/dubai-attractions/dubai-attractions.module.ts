import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { listAttractionComponent } from './list-attractions/list-attractions.component';
import { AttractionComponent } from './attraction/attraction.component';
import { UpdateAttractionComponent } from './update-attraction/update-attraction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AttractionDetailsComponent } from './attraction-details/attraction-details.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    listAttractionComponent,
    AttractionComponent,
    UpdateAttractionComponent,
    AttractionDetailsComponent],
  imports: [
    CommonModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJwyWnufTsvPNTzZUjfEHjvM0X4JshIWY'
    })
  ],
  exports: [
    listAttractionComponent,
    AttractionComponent,
    UpdateAttractionComponent
  ]
})
export class DubaiAttractionsModule { }
