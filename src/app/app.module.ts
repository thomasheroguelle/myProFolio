import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { PresentationContentComponent } from './component/presentation-content/presentation-content.component';
import { ServicesCardComponent } from './component/services-card/services-card.component';
import { FeaturedProjectsComponent } from './component/featured-projects/featured-projects';
import { ContactmeComponent } from './component/contactme/contactme.component';
import { PortfoliopageComponent } from './page/portfoliopage/portfoliopage.component';
import { AppRoutingModule } from './app-routing.module';
import { BurgerMenuComponent } from './component/burger-menu/burger-menu.component';
import { ErrorpageComponent } from './component/errorpage/errorpage.component';
import { EshopComponent } from './component/eshop/eshop.component';
import { FilteredProjectsComponent } from './component/filtered-projects/filtered-projects.component';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { BackBtnComponent } from './component/back-btn/back-btn.component';
import { StacksUsedComponent } from './component/stacks-used/stacks-used.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationContentComponent,
    ServicesCardComponent,
    FeaturedProjectsComponent,
    ContactmeComponent,
    PortfoliopageComponent,
    BurgerMenuComponent,
    ErrorpageComponent,
    EshopComponent,
    FilteredProjectsComponent,
    ProjectCardComponent,
    BackBtnComponent,
    StacksUsedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
