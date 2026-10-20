import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  @Input() limit: number = 0;
  @Input() columns: number = 4;

  testimonialsList = [
    {
      name: 'Kareem M.',
      city: 'Zagazig',
      comment: 'TESTIMONIALS.REVIEWS.KAREEM',
      image: '/assets/images/photo_2026-09-23_21-14-40.jpg',
      scaleClass: 'scale-125',
    },
    {
      name: 'Ahmed H.',
      city: 'Cairo',
      comment: 'TESTIMONIALS.REVIEWS.AHMED',
      image: '/assets/images/AhmedHamm.jpeg',
      scaleClass: 'scale-125',
    },
    {
      name: 'Sara H.',
      city: 'Faqous',
      comment: 'TESTIMONIALS.REVIEWS.SARA',
      image: '/assets/images/SaraH.webp',
      scaleClass: '',
    },
    {
      name: 'Laila F.',
      city: '6th of October',
      comment: 'TESTIMONIALS.REVIEWS.LAILA',
      image: '/assets/images/Laila.webp',
      scaleClass: '',
    },
  ];

  get displayedTestimonials() {
    return this.limit > 0
      ? this.testimonialsList.slice(0, this.limit)
      : this.testimonialsList;
  }
}
