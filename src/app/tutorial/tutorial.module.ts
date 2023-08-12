import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeroesComponent } from './heroes/heroes.component';
import { TutorialRoutingModule } from './tutorial-routing.module';

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, TutorialRoutingModule, SharedModule],
})
export class TutorialModule {}
