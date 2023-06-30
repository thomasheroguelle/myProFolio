import { Component, Input } from '@angular/core';
import { IProjects, IServiceCards, SERVICECARDS } from 'src/mock/mock';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

@Input() card!:IProjects;
}
