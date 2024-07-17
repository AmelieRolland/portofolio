import { Injectable } from '@angular/core';
import { projects } from './shared/project-mock';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects() {
    return projects;
  }
}
