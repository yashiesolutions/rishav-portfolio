import { Component } from '@angular/core';

import { SKILL_GROUPS } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skillGroups = SKILL_GROUPS;
}
