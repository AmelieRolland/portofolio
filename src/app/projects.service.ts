import { Injectable } from '@angular/core';
import { projects } from './shared/project-mock';
import { Project } from './shared/entities';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): Project[] {
    return projects;
  }
}
