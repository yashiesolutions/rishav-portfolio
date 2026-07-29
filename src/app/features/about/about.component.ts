import { Component } from '@angular/core';

import { PROFILE, ABOUT, EDUCATION } from '../../core/data/portfolio-data';
import { IMAGE_PATHS, RESUME_PATH } from '../../core/config/assets.config';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly about = ABOUT;
  readonly education = EDUCATION;
  readonly images = IMAGE_PATHS;
  readonly resumePath = RESUME_PATH;
}
