import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { listAttractionComponent } from './list-attractions/list-attractions.component';
import { AttractionComponent } from './attraction/attraction.component';
import { UpdateAttractionComponent } from './update-attraction/update-attraction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    listAttractionComponent,
    AttractionComponent,
    UpdateAttractionComponent],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    listAttractionComponent,
    AttractionComponent,
    UpdateAttractionComponent
  ]
})
export class DubaiAttractionsModule { }
