import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllAttractionsComponent } from './get-all-attractions/get-all-attractions.component';
import { GetOneAttractionComponent } from './get-one-attraction/get-one-attraction.component';
import { UpdateAttractionComponent } from './update-attraction/update-attraction.component';



@NgModule({
  declarations: [
    GetAllAttractionsComponent,
    GetOneAttractionComponent,
    UpdateAttractionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GetAllAttractionsComponent,
    GetOneAttractionComponent,
    UpdateAttractionComponent
  ]
})
export class DubaiAttractionsModule { }
