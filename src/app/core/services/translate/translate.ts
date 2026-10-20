import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Translate {
  private isBrowser: boolean;

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.translateService.addLangs(['en', 'ar']);
    this.translateService.setFallbackLang('en');
    const savedLang = this.isBrowser ? localStorage.getItem('language') : null;

    this.setLanguage(savedLang === 'ar' ? 'ar' : 'en');
  }

  setLanguage(lang: 'en' | 'ar'): void {
    this.translateService.use(lang);

    if (this.isBrowser) {
      localStorage.setItem('language', lang);

      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  getCurrentLanguage(): string {
    return this.translateService.getCurrentLang() ?? 'en';
  }
}
