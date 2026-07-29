import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFILE, STATS, PROJECTS } from '../../core/data/portfolio-data';
import { IMAGE_PATHS, RESUME_PATH, getProjectImage } from '../../core/config/assets.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly profile = PROFILE;
  readonly stats = STATS;
  readonly featuredProjects = PROJECTS.slice(0, 3);
  readonly images = IMAGE_PATHS;
  readonly resumePath = RESUME_PATH;

  projectImage(imageKey: string): string {
    return getProjectImage(imageKey);
  }
}
