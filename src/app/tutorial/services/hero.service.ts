import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Hero } from '../interfaes/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private readonly _messageService: MessageService,
    private _httpClient: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = this._httpClient.get<Hero[]>('http://localhost:3000/heroes');
    this._messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero2(id: number): Observable<Hero> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hero = this.getHeroes().pipe(
      map((heroes) => {
        return heroes.filter((i) => i.id === id);
      }),
      map<Hero[], Hero>((heroes, index) => {
        return heroes[index];
      })
    );
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }

  getHero(id: number): Observable<Hero> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hero = this._httpClient.get<Hero>(
      `http://localhost:3000/heroes/${id}`
    );
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }
}
