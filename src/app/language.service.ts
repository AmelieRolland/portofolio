import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  private currentLang: 'fr' | 'en' = 'fr';

  constructor() { }

  setLanguage(lang: 'fr' | 'en') {
    this.currentLang = lang;
  }

  getLanguage(): 'fr' | 'en' {
    return this.currentLang;
  }

  getTranslation(item: { fr: string; en: string }): string {
    return item[this.currentLang] || item['fr'];
  }
}

