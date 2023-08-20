import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { ReactiveHeroComponent } from './components/input-forms/reactive-hero/reactive-hero.component';
import { ReactiveSampleComponent } from './components/input-forms/reactive-sample/reactive-sample.component';
import { TemplateDrivenHeroComponent } from './components/input-forms/template-driven-hero/template-driven-hero.component';
import { MessageComponent } from './components/message/message.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import HeroesScreenComponent from './screens/heroes-screen/heroes-screen.component';
import { InputFormsSampleComponent } from './screens/input-forms-sample/input-forms-sample.component';
import { TutorialRoutingModule } from './tutorial-routing.module';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroesScreenComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent,
    TemplateDrivenHeroComponent,
    ReactiveHeroComponent,
    InputFormsSampleComponent,
    ReactiveSampleComponent,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class TutorialModule {}
