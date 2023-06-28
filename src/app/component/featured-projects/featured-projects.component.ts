import { Component } from '@angular/core';
import { IProjects, PROJECTS } from 'src/mock/mock';


@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {

  works : IProjects[] = PROJECTS;

}
