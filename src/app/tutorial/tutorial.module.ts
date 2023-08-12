import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesScreenComponent } from './screens/heroes-screen/heroes-screen.component';
import { TutorialRoutingModule } from './tutorial-routing.module';

@NgModule({
  declarations: [HeroesComponent, DetailComponent, HeroesScreenComponent],
  imports: [CommonModule, TutorialRoutingModule, SharedModule],
})
export class TutorialModule {}
