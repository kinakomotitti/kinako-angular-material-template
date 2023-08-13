import { from, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

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

  getHero(id: number): Observable<Hero> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hero = HEROES.find((h) => h.id === id)!;
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
