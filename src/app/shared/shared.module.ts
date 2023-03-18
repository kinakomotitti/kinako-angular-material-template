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

@NgModule({
  declarations: [
    LayoutComponent,
    UnauthorizedLayoutComponent
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
  ]
})
export class SharedModule { }
