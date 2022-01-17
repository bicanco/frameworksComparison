import { Hero } from 'src/app/hero';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
