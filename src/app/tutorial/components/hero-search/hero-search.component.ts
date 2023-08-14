import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  Subject,
  switchMap,
} from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-turorial-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private _heroService: HeroService) {
    const subject = new BehaviorSubject(0);
    subject.next(1); //Subscribe する前に値を設定してもOK
    subject.subscribe((x) => console.log(x));

    const subject2 = new Subject();
    subject2.next(20); //Subscribe する前に値を設定しても無視される。
    subject2.subscribe((x) => console.log(x));
    subject2.next(10);
  }

  // 検索語をobservableストリームにpushする
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // 各キーストロークの後、検索前に300ms待つ
      debounceTime(300),

      // 直前の検索語と同じ場合は無視する
      distinctUntilChanged(),

      // 検索語が変わる度に、新しい検索observableにスイッチする
      switchMap((term: string) => this._heroService.searchHeroes(term))
    );
  }
}
