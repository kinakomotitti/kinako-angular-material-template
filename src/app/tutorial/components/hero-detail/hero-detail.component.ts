import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../interfaes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-turoeial-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  @Input() hero!: Hero;
}
