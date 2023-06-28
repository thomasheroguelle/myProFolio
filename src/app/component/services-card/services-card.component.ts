import { Component } from '@angular/core';
import { IServiceCards, SERVICECARDS } from 'src/mock/mock';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.css']
})
export class ServicesCardComponent {
  serviceCards : IServiceCards[] = SERVICECARDS;

}
