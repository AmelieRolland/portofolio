import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { Stack } from '../shared/entities';
import { stack } from '../shared/stack-mock';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ProjectsComponent, AboutComponent, ContactComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  stack:Stack[] = stack;

  ngOnInit() {
    this.stack = this.stack.sort(() => Math.random() - 0.5);
  }

}
