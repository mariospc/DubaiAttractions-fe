import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllAttractionsComponent } from './dubai-attractions/get-all-attractions/get-all-attractions.component';
import { GetOneAttractionComponent } from './dubai-attractions/get-one-attraction/get-one-attraction.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  { path: 'attractions', component: GetAllAttractionsComponent },
  { path: 'attractions/:title', component: GetOneAttractionComponent },
  { path: 'user/login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }