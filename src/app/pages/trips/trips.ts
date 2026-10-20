import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-trips',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './trips.html',
  styleUrl: './trips.scss',
})
export class Trips {
  scrollToWeeklyTrips() {
    const element = document.getElementById('weekly-trips');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  weeklyTrips = [
    {
      id: 'dahab',
      title: 'Dahab',
      tags: 'Beach • Adventure • Relaxation',
      image: '/assets/images/Dahabhero.png',
    },
    {
      id: 'alexandria',
      title: 'Alexandria',
      tags: 'Sea • History • Food',
      image: '/assets/images/Alexandria_beach_Med.5d1221d28cc3b-1080x720.webp',
    },
    {
      id: 'fayoum',
      title: 'Fayoum',
      tags: 'Nature • Safari • Camping',
      image: '/assets/images/Fayom3.jpg',
    },
    {
      id: 'portsaid',
      title: 'Port Said',
      tags: 'Sea • History • Shopping',
      image: '/assets/images/Portsaidhero.jpeg',
    },
  ];

  upcomingDestinations = [
    { name: 'Siwa Oasis', image: '/assets/images/Siwa.webp' },
    { name: 'Saint Catherine', image: '/assets/images/SantKat.webp' },
    { name: 'Luxor', image: '/assets/images/Luxor.webp' },
    { name: 'Aswan', image: '/assets/images/Aswan.webp' },
    { name: 'Marsa Matrouh', image: '/assets/images/ageeba-beach.webp' },
    { name: 'Sharm El Sheikh', image: '/assets/images/Sharm33.webp' },
  ];
}
