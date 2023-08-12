import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Hero } from '../../interfaes/hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-tutorial-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];

  @Input() selectedHero?: Hero;
  @Output() selectedHeroChange = new EventEmitter<Hero>();

  constructor(
    private readonly _heroService: HeroService,
    private readonly _messageService: MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelectHeroButtonClick(selected: Hero): void {
    this._messageService.add(
      `HeroesComponent: Selected hero id=${selected.id}`
    );
    this.selectedHeroChange.emit(selected);
  }

  private getHeroes(): void {
    this._messageService.add('Started feching heros.');
    this._heroService.getHeroes().subscribe((result) => {
      this.heroes = result;
    });
  }
}
