import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { KSelectComponent } from './controls/k-select/k-select.component';
import { KSelect2Component } from './controls/k-select2/k-select2.component';
import { KTableComponent } from './controls/k-table/k-table.component';
import { LayoutComponent } from './layout/authorized-layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { UnauthorizedLayoutComponent } from './layout/unauthorized-layout/unauthorized-layout.component';
import { AuthGuard } from './routers/auth-guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    LayoutComponent,
    UnauthorizedLayoutComponent,
    KTableComponent,
    KSelectComponent,
    SidenavComponent,
    KSelect2Component,
  ],
  providers: [AuthService, AuthGuard],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [KTableComponent, KSelectComponent, FormsModule, KSelect2Component],
})
export class SharedModule {}
