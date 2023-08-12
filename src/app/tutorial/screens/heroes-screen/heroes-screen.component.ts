import { Component } from '@angular/core';

import { Hero } from '../../interfaes/hero';

@Component({
  selector: 'app-heroes-screen',
  templateUrl: './heroes-screen.component.html',
  styleUrls: ['./heroes-screen.component.scss'],
})
export class HeroesScreenComponent {
  selectedHero?: Hero;
}
