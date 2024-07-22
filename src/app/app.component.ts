import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './shared/language.service';
import { whoami } from './shared/whoami-mock';
import { WhoAmI } from './shared/entities';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  whoami: WhoAmI[] = whoami;
  constructor(private el: ElementRef, public languageService: LanguageService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const skillsSection = this.el.nativeElement.querySelector('app-skills');
    const rect = skillsSection.getBoundingClientRect();
    const backgroundSection = this.el.nativeElement.querySelector('.background-section');
    
    if (rect.top <= 0 && rect.bottom > 0) {
      backgroundSection.classList.add('fixed-bg');
    } else {
      backgroundSection.classList.remove('fixed-bg');
    }
  }

  ngOnInit(): void {
    this.onScroll(new Event('scroll')); 
  }

  toggleLanguage() {
    const newLang = this.languageService.getLanguage() === 'fr' ? 'en' : 'fr';
    this.languageService.setLanguage(newLang);
  }




}
