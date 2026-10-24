import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  photos = [
    {
      url: '/assets/images/Sharm1.webp',
      title: 'Sharm Marina',
      location: 'Sharm El Sheikh',
    },
    {
      url: '/assets/images/egypt_cairo_pyramids_of_giza.webp',
      title: 'The Great Pyramids',
      location: 'Giza',
    },
    {
      url: '/assets/images/Dahab1.webp',
      title: 'White Desert',
      location: 'Dahab',
    },
    {
      url: '/assets/images/Oriental-Rivoli-Hotel-webp.webp',
      title: 'Oriental-Rivoli Hotel',
      location: 'Saint Catherine',
    },
    {
      url: '/assets/images/jaz-merabel.webp',
      title: 'Magic Lake',
      location: 'El Gouna',
    },
    { url: '/assets/images/marina.webp', title: 'Marina', location: 'Marina' },
    { url: '/assets/images/Luxor.webp', title: 'Luxor', location: 'Luxor' },
    { url: '/assets/images/Aswan.webp', title: 'Aswan', location: 'Aswan' },
    {
      url: '/assets/images/Portsaidhero.jpeg',
      title: 'Portsaid',
      location: 'Portsaid',
    },
  ];

  currentIndex = 1;
  isLightboxOpen = false;
  selectedImageIndex = 0;

  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.photos.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex === this.photos.length - 1 ? 0 : this.currentIndex + 1;
  }

  getLeftIndex(): number {
    return this.currentIndex === 0
      ? this.photos.length - 1
      : this.currentIndex - 1;
  }

  getRightIndex(): number {
    return this.currentIndex === this.photos.length - 1
      ? 0
      : this.currentIndex + 1;
  }

  openLightbox(index: number) {
    this.selectedImageIndex = index;
    this.isLightboxOpen = true;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
  }

  destinations = [
    {
      title: 'Giza',
      image: '/assets/images/egypt_cairo_pyramids_of_giza.webp',
      subtitle: 'Pyramids of Giza',
    },
    {
      title: 'Saint Catherine',
      image: '/assets/images/St-Catherine-Mount-Sinai-C.webp',
      subtitle: 'Mount Sinai',
    },
    {
      title: 'Fayoum',
      image: '/assets/images/Fayom4.jpg',
      subtitle: 'Wadi El Rayan',
    },
    {
      title: 'Dahab',
      image: '/assets/images/dahab15.jpeg',
      subtitle: 'Red Sea Coast',
    },
    {
      title: 'Marsa Matrouh',
      image: '/assets/images/ageeba-beach.webp',
      subtitle: 'Ageeba Beach',
    },
    {
      title: 'Sharm El Sheikh',
      image: '/assets/images/Sharm33.webp',
      subtitle: 'Red Sea Paradise',
    },
  ];

  selectedImage: string | null = null;

  openModal(imgUrl: string) {
    this.selectedImage = imgUrl;
  }

  closeModal() {
    this.selectedImage = null;
  }

  isVideoboxOpen = false;
  currentVideoUrl: string | null = null;
  currentVideoTitle: string | null = null;

  videos = [
    {
      id: 1,
      thumbnail: '/assets/images/SantKat.webp',
      videoUrl: '/assets/videos/Sant1.mp4',
      location: 'Saint Catherine',
      title: 'Mountain Adventure',
      duration: '0.09',
    },
    {
      id: 2,
      thumbnail: '/assets/images/St-Catherine-Mount-Sinai-C.webp',
      videoUrl: '/assets/videos/Sant2.mp4',
      location: 'Saint Catherine',
      title: 'El Saint. Catherine Monastery',
      duration: '0.19',
    },
    {
      id: 3,
      thumbnail: '/assets/images/Fayom10.webp',
      videoUrl: '/assets/videos/Fayoum1.mp4',
      location: 'Fayoum',
      title: 'Sandboarding',
      duration: '0.14',
    },
    {
      id: 4,
      thumbnail: '/assets/images/Fayom11.webp',
      videoUrl: '/assets/videos/Fayoum2.mp4',
      location: 'Fayoum',
      title: 'Sandboarding',
      duration: '0.10',
    },
    {
      id: 5,
      thumbnail: '/assets/images/Dahab17.webp',
      videoUrl: '/assets/videos/Dahab2.mp4',
      location: 'Dahab',
      title: 'Jabal Al-Tawila',
      duration: '0.26',
    },
    {
      id: 6,
      thumbnail: '/assets/images/Dahab5.jpg',
      videoUrl: '/assets/videos/Dahab4.mp4',
      location: 'Dahab',
      title: 'Underwater World',
      duration: '0.35',
    },
    {
      id: 7,
      thumbnail: '/assets/images/Dahab6.jpg',
      videoUrl: '/assets/videos/Sharm4.mp4',
      location: 'Sharm El Sheikh',
      title: 'Underwater World',
      duration: '0.15',
    },
    {
      id: 8,
      thumbnail: '/assets/images/shutterstock_219065986-800x534.webp',
      videoUrl: '/assets/videos/Sharm2.mp4',
      location: 'Sharm El Sheikh',
      title: 'tourist resort',
      duration: '0.08',
    },
  ];

  openVideoModal(videoUrl: string, title: string): void {
    this.currentVideoUrl = videoUrl;
    this.currentVideoTitle = title;
    this.isVideoboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeVideoModal(): void {
    const video = document.querySelector(
      '.video-lightbox-player',
    ) as HTMLVideoElement | null;

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    this.isVideoboxOpen = false;
    this.currentVideoUrl = null;
    this.currentVideoTitle = null;
    document.body.style.overflow = '';
  }

  toggleFullscreen(): void {
    const video = document.querySelector(
      '.video-lightbox-player',
    ) as HTMLVideoElement | null;

    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      video.requestFullscreen?.().catch(() => {});
    }
  }
}
