import { Component } from '@angular/core';
import { IProjects, PROJECTS } from 'src/mock/mock';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.css']
})
export class EshopComponent {

  imageCard : IProjects[] = PROJECTS

  imageSelected = this.imageCard.filter((imageCard : IProjects) => imageCard.card === true);

}
