import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MessageComponent } from './components/message/message.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import HeroesScreenComponent from './screens/heroes-screen/heroes-screen.component';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroesScreenComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [CommonModule, TutorialRoutingModule, SharedModule],
})
export class TutorialModule {}
