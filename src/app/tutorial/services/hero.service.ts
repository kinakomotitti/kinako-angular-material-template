import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      tap((_) => this._messageService.add('fetched heroes')),
      map((heroes) => {
        return heroes.filter((i) => i.id === id);
      }),
      map<Hero[], Hero>((heroes, index) => {
        return heroes[index];
      }),
      tap((_) => this._messageService.add('fetched heroes')),
      catchError(this.handleError<Hero>('getHeroes'))
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

  updateHero(hero: Hero): void {
    this._httpClient
      .put(`http://localhost:3000/heroes/${hero.id}`, hero)
      .pipe(
        tap((_) => this._messageService.add(`updated hero id=${hero.id}`)),
        catchError(this.handleError<Hero>('updateHero'))
      )
      .subscribe((result) => {
        this._messageService.add(`updated hero id=${hero.id}`);
      });
  }

  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this._httpClient
      .post<Hero>('http://localhost:3000/heroes', hero, httpOptions)
      .pipe(
        tap((newHero: Hero) =>
          this._messageService.add(`added hero w/ id=${newHero.id}`)
        ),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    return this._httpClient.get<Hero[]>(
      `http://localhost:3000/heroes?name=${term}`
    );
  }

  /**
   * 失敗したHttp操作を処理します。
   * アプリを持続させます。
   *
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: T): Observable<T> => {
      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      // this.log(`${operation} failed: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }
}
