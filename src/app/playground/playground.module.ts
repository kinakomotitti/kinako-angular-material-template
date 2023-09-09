import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormSampleComponent } from './components/reactive-form/reactive-form.component';
import { PlaygroundRoutingModule } from './playground.route.module';
import { Page1Component } from './screens/page1/page1.component';

@NgModule({
  declarations: [Page1Component, ReactiveFormSampleComponent],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class PlaygroundModule {}
