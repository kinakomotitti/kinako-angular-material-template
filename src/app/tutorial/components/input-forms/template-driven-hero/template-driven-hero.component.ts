import { Hero } from 'src/app/tutorial/data-models/hero';

import { Component } from '@angular/core';

@Component({
  selector: 'app-turoeial-template-driven-hero',
  templateUrl: './template-driven-hero.component.html',
  styleUrls: ['./template-driven-hero.component.scss'],
})
export class TemplateDrivenHeroComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
