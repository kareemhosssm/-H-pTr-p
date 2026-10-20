import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Translate } from '../../core/services/translate/translate';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './navbar.html',
})
export class Navbar {
  private translation = inject(Translate);

  isMenuOpen = false;
  isScrolled = false;

  isLanguageMenuOpen = false;

  toggleLanguageMenu(): void {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  selectLanguage(lang: 'en' | 'ar'): void {
    this.translation.setLanguage(lang);
    this.isLanguageMenuOpen = false;
  }

  get currentLanguage(): string {
    return this.translation.getCurrentLanguage();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleLanguage(): void {
    const nextLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    this.translation.setLanguage(nextLanguage);
  }
}
