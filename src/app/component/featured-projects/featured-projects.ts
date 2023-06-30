import { Component, Input } from '@angular/core';
import { IProjects, PROJECTS } from 'src/mock/mock';


@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {

  // presentationCard : IProjects[] = PROJECTS;

  presentationCard: IProjects[] = PROJECTS;

}
