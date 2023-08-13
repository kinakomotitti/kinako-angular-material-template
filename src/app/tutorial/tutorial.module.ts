import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MessageComponent } from './components/message/message.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import HeroesScreenComponent from './screens/heroes-screen/heroes-screen.component';
import { TutorialRoutingModule } from './tutorial-routing.module';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroesScreenComponent,
    MessageComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, TutorialRoutingModule, SharedModule],
})
export class TutorialModule {}
