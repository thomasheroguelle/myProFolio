import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { PresentationContentComponent } from './component/presentation-content/presentation-content.component';
import { ServicesCardComponent } from './component/services-card/services-card.component';
import { FeaturedProjectsComponent } from './component/featured-projects/featured-projects.component';
import { ContactmeComponent } from './component/contactme/contactme.component';
import { PortfoliopageComponent } from './page/portfoliopage/portfoliopage.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationContentComponent,
    ServicesCardComponent,
    FeaturedProjectsComponent,
    ContactmeComponent,
    PortfoliopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
