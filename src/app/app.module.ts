import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersModule } from './users/users.module';
import { DubaiAttractionsModule } from './dubai-attractions/dubai-attractions.module'
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    DubaiAttractionsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
