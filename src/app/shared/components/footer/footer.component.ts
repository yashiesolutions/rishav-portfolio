import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFILE } from '../../../core/data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();

  get whatsappLink(): string {
    return `https://wa.me/${this.profile.whatsappNumber}`;
  }
}
