import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnauthorizedLayoutComponent } from './shared/layout/unauthorized-layout/unauthorized-layout.component';
import { AuthGuard } from './shared/routers/auth-guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'unauthorized',
    component: UnauthorizedLayoutComponent,
    children: [{ path: '', component: UnauthorizedComponent }],
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'tutorial',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./tutorial/tutorial.module').then((m) => m.TutorialModule),
  },
  {
    path: 'playground',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./playground/playground.module').then((m) => m.PlaygroundModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
