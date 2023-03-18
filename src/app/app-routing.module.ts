import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/authorized-layout/layout.component';
import { UnauthorizedLayoutComponent } from './shared/layout/unauthorized-layout/unauthorized-layout.component';
import { AuthGuard } from './shared/routers/auth-guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: "unauthorized", 
    component: UnauthorizedLayoutComponent,
    children:[
      { path: '', component: UnauthorizedComponent }
    ]
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
