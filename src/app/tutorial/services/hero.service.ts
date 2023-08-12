import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { Hero } from '../interfaes/hero';
import { HEROES } from '../mock/heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private readonly _messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this._messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
