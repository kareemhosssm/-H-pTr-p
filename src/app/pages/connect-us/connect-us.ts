import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-connect-us',
  imports: [TranslatePipe],
  templateUrl: './connect-us.html',
  styleUrl: './connect-us.scss',
})
export class ConnectUs {
  whatsappNumber = '+201110497240';

  openWhatsApp(): void {
    const message = encodeURIComponent(
      'Hello Ĥ&Ĥ 👋 I would like to know more about your upcoming trips.',
    );

    window.open(
      `https://wa.me/${this.whatsappNumber}?text=${message}`,
      '_blank',
    );
  }
}
