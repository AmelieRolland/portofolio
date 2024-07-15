import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { Stack } from '../entities';
import { stack } from '../stack-mock';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ProjectsComponent, AboutComponent, ContactComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  stack:Stack[] = stack;

  ngOnInit() {
    this.stack = stack;
  }

}
