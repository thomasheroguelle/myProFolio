import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProjects, PROJECTS } from 'src/mock/mock';

@Component({
  selector: 'app-filtered-projects',
  templateUrl: './filtered-projects.component.html',
  styleUrls: ['./filtered-projects.component.css']
})
export class FilteredProjectsComponent {
  projects: IProjects[] = PROJECTS;
  myForm: FormGroup;
  selectedProject: IProjects | null = null; //  Projet sélectionné (initialisé à null)

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({ filterProject: '' });
  }
  
  filterProjects() {
    const selectedTitle = this.myForm.value.filterProject; // Récupération de la valeur sélectionnée dans le formulaire
    this.selectedProject = this.projects.find(project => project.title === selectedTitle) || null;  // Recherche du projet correspondant au titre sélectionné, sinon null
  }
}









