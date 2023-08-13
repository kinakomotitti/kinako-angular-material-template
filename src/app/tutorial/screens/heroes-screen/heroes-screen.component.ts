import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../interfaes/hero';

@Component({
  selector: 'app-heroes-screen',
  templateUrl: './heroes-screen.component.html',
  styleUrls: ['./heroes-screen.component.scss'],
})
export default class HeroesScreenComponent implements OnInit {
  selectedHero?: Hero;
  heroId!: number;

  constructor(private _route: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    if (this._route.snapshot.paramMap.has('id') === true) {
      this.heroId = Number(this._route.snapshot.paramMap.get('id'));
    }
  }

  onBackButtonClick(): void {
    this._location.back();
  }
}
