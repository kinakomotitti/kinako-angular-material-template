import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { HeroesScreenComponent } from './screens/heroes-screen/heroes-screen.component';

@NgModule({
  declarations: [HeroesComponent, DetailComponent, HeroesScreenComponent],
  imports: [CommonModule, TutorialRoutingModule, SharedModule],
})
export class TutorialModule {}
