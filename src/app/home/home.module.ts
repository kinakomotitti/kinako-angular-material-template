import { NgModule } from '@angular/core';
import { HomeHomeComponent } from './home-home/home-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
