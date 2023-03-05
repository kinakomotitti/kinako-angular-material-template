import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AppModule } from '../app.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class SharedModule { }
