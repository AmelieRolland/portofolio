import { Component, OnInit } from '@angular/core';
import { Project } from '../entities';
import { ProjectsService } from '../projects.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects:Project[]=[];

  constructor(private projectService : ProjectsService ) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

}
