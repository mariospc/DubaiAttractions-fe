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
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DubaiAttractionsModule } from './dubai-attractions/dubai-attractions.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    DubaiAttractionsModule,
    UsersModule,
    NgxSpinnerModule
  ],
  exports: [
    RouterModule
  ],
  providers: [NgbModalConfig, NgbModal, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
