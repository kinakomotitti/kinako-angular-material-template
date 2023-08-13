import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../interfaes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes-screen',
  templateUrl: './heroes-screen.component.html',
  styleUrls: ['./heroes-screen.component.scss'],
})
export default class HeroesScreenComponent {
  selectedHero?: Hero;
}
