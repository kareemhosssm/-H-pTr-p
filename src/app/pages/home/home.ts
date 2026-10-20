import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Testimonials } from '../../shared/components/testimonials/testimonials';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, Testimonials, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  selectedDestination = signal('dahab');

  constructor(private router: Router) {}

  onExplore(destination: string) {
    if (destination) {
      this.router.navigate(['/details', destination.toLowerCase()]);
    }
  }
}
