import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppModule } from '../app.module';
import { MaterialModule } from '../material/material.module';
import { KSelectComponent } from './controls/k-select/k-select.component';
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
  ],
  providers: [AuthService, AuthGuard],
  imports: [RouterModule, CommonModule, MaterialModule, FormsModule],
  exports: [KTableComponent, KSelectComponent, FormsModule],
})
export class SharedModule {}
