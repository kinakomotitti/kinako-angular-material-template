/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../../interfaes/hero';
import { HEROES } from '../../mock/heroes';

@Component({
  selector: 'app-tutorial-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes = HEROES;

  @Input() selectedHero?: Hero;
  @Output() selectedHeroChange = new EventEmitter<Hero>();

  onSelectHeroButtonClick(selected: Hero): void {
    this.selectedHeroChange.emit(selected);
  }
}
