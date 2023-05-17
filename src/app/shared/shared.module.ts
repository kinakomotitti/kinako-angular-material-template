import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/authorized-layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AppModule } from '../app.module';

import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './routers/auth-guard';
import { UnauthorizedLayoutComponent } from './layout/unauthorized-layout/unauthorized-layout.component';
import { KTableComponent } from './controls/k-table/k-table.component';
import { KSelectComponent } from './controls/k-select/k-select.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

@NgModule({
  declarations: [
    LayoutComponent,
    UnauthorizedLayoutComponent,
    KTableComponent,
    KSelectComponent,
    SidenavComponent
  ],
  providers:[
    AuthService,
    AuthGuard
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports:[
    KTableComponent,
    KSelectComponent
  ]
})
export class SharedModule { }
