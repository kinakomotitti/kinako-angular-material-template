import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../shared/layout/authorized-layout/layout.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import HeroesScreenComponent from './screens/heroes-screen/heroes-screen.component';
import { InputFormsSampleComponent } from './screens/input-forms-sample/input-forms-sample.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'heroes/:id',
        component: HeroesScreenComponent,
        pathMatch: 'full',
      },
      {
        path: 'form',
        component: InputFormsSampleComponent,
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialRoutingModule {}
