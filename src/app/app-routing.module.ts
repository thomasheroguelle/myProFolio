import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfoliopageComponent } from './page/portfoliopage/portfoliopage.component';
import { ErrorpageComponent } from './component/errorpage/errorpage.component';
import { EshopComponent } from './component/eshop/eshop.component';
import { FilteredProjectsComponent } from './component/filtered-projects/filtered-projects.component';


const routes: Routes = [
  { path: "", component: PortfoliopageComponent },
  { path: "eshop-base", component: EshopComponent },
  { path: "projects", component: FilteredProjectsComponent },
  { path: 'error', component: ErrorpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
