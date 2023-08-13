import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../../interfaes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-turoeial-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() heroId!: number;

  hero!: Hero;

  constructor(private readonly _heroService: HeroService) {}

  ngOnInit(): void {
    this._heroService
      .getHero(this.heroId)
      .subscribe((hero) => (this.hero = hero));
  }
}
