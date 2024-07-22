import { Injectable } from '@angular/core';
import { projects } from './project-mock';
import { Project } from './entities';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): Project[] {
    return projects;
  }
}
