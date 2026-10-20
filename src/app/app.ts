import { Component, signal, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Flowbite } from './core/services/flowbite/flowbite';
import { Translate } from './core/services/translate/translate';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('Tours');

  constructor(
    private flowbite: Flowbite,
    private translation: Translate,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.flowbite.loadFlowbite(() => {
        initFlowbite();
      });
    }
  }
}
