import { Component } from '@angular/core';
import { IProjets, PROJETS } from 'src/mock/mock';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.css']
})
export class EshopComponent {

  imageCard : IProjets[] = PROJETS

  imageSelected = this.imageCard.filter((imageCard : IProjets) => imageCard.card === true);

}
