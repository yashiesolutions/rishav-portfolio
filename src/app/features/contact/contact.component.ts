import { Component } from '@angular/core';

import { PROFILE } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = PROFILE;

  get whatsappLink(): string {
    return `https://wa.me/${this.profile.whatsappNumber}`;
  }

  get mailtoLink(): string {
    return `mailto:${this.profile.email}?subject=${encodeURIComponent('Portfolio enquiry')}`;
  }
}
