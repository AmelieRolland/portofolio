import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/entities';
import { ProjectsService } from '../projects.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  getPillClass(tech: string): string {
    switch (tech.toLowerCase()) {
      case 'javascript':
        return 'bg-yellow-500 text-black';
      case 'php':
        return 'bg-blue-500 text-white';
      case 'sql':
        return 'bg-gray-500 text-white';
      case 'typescript':
        return 'bg-blue-700 text-white';
      case 'angular':
        return 'bg-red-500 text-white';
      case 'bootstrap':
        return 'bg-purple-500 text-white';
      case 'symfony':
        return 'bg-black text-white';
      case 'tailwind':
        return 'bg-purple-700 text-white';
      case 'nextjs':
        return 'bg-blue-700 text-white';
      case 'node.js':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-200 text-black';
    }
  }

  selectedProject: any = null;
  isModalOpen = false;

  openModal(project: any) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
  }

}
