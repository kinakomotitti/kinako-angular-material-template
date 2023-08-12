/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';

import { Hero } from '../../interfaes/hero';
import { HEROES } from '../../mock/heroes';

@Component({
  selector: 'app-tutorial-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelectHeroButtonClick(selected: Hero): void {
    console.debug(selected);
    this.selectedHero = selected;
  }
}
