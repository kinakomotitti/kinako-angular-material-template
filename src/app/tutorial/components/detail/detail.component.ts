import { Component, Input } from '@angular/core';

import { Hero } from '../../interfaes/hero';

@Component({
  selector: 'app-turoeial-hero-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  @Input() selectedHero!: Hero;
}
