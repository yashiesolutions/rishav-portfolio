import { Component } from '@angular/core';

import { PROJECTS } from '../../core/data/portfolio-data';
import { getProjectImage } from '../../core/config/assets.config';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;

  projectImage(imageKey: string): string {
    return getProjectImage(imageKey);
  }
}
