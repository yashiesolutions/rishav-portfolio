import { Component } from '@angular/core';

import { EXPERIENCE } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;
}
