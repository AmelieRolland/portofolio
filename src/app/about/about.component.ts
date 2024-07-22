import { Component, OnInit } from '@angular/core';
import { whoami } from '../shared/whoami-mock';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { WhoAmI } from '../shared/entities';
import { LanguageService } from '../shared/language.service';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  whoamiList: WhoAmI[] = [];
  selectedWhoAmI: WhoAmI | null = null;
  currentLang: 'fr' | 'en' = 'fr';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {

    this.whoamiList = whoami;
    this.getTitle;
    this.getDescription;

  }

  augmenterOpacite(image: HTMLElement) {
    image.classList.add('clicked');
  }

  toggleDescription(index: number) {
    if (this.whoamiList[index] === this.selectedWhoAmI) {
      this.whoamiList[index].isActive = false;
      this.selectedWhoAmI = null;
    } else {
      this.whoamiList.forEach((item, i) => {
        item.isActive = (i === index);
      });
      this.selectedWhoAmI = this.whoamiList[index];
    }
  }

  getTitle(item: WhoAmI): string {
    return this.languageService.getTranslation(item.title);
    
  }

  getDescription(item: WhoAmI): string {
    return this.languageService.getTranslation(item.description);
  }



}