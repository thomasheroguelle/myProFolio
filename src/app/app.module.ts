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
import { FormsModule } from '@angular/forms';
import { BurgerMenuComponent } from './component/burger-menu/burger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationContentComponent,
    ServicesCardComponent,
    FeaturedProjectsComponent,
    ContactmeComponent,
    PortfoliopageComponent,
    BurgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
