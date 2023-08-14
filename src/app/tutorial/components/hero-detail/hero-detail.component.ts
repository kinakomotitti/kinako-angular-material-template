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
      .getHero2(this.heroId)
      .subscribe((hero) => (this.hero = hero));
  }

  save(): void {
    if (this.hero) {
      this._heroService.updateHero(this.hero);
    }
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this._heroService.addHero({ name } as Hero).subscribe();
  }
}
