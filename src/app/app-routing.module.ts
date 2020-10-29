import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listAttractionComponent } from './dubai-attractions/list-attractions/list-attractions.component';
import { AttractionComponent } from './dubai-attractions/attraction/attraction.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  { path: 'attractions', component: listAttractionComponent },
  { path: 'attractions/:title', component: AttractionComponent },
  { path: 'user/login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }