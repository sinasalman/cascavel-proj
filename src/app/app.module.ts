import { NgModule } from '@angular/core';
import { BrowserModule , HammerModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { CollabrateComponent } from './collabrate/collabrate.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { HttpClientModule } from "@angular/common/http";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule} from '@angular/material/icon'
import { SamplesComponent } from './samples/samples.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    CollabrateComponent,
    ServicesComponent,
    TeamComponent,
    SamplesComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    HammerModule,
    MatTooltipModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
