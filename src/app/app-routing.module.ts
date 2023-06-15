import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfoliopageComponent } from './page/portfoliopage/portfoliopage.component';
import { ErrorpageComponent } from './component/errorpage/errorpage.component';


const routes: Routes = [
  {path : "", component : PortfoliopageComponent},
  { path: 'error', component: ErrorpageComponent },

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
