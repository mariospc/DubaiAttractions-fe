import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { DubaiAttractionsModule } from './dubai-attractions/dubai-attractions.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    DubaiAttractionsModule,
    UsersModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
