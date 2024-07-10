import { Component, HostListener, OnInit } from '@angular/core';
import { TransitionFirstComponent } from '../transition-first/transition-first.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TransitionFirstComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  ngOnInit() {
    this.onScroll(); 
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event?: Event): void {
    const elements = document.querySelectorAll('.transition-opacity');
    
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

   
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-100');
      } else {
        element.classList.remove('opacity-100');
        element.classList.add('opacity-0');
      }
    });
  }
}