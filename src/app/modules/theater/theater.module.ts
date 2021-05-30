import { SharedModule } from './../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheaterComponent } from './theater.component';
import { TheaterRoutingModule } from './theater-routing.module';

@NgModule({
  imports: [CommonModule, TheaterRoutingModule, SharedModule],
  declarations: [TheaterComponent],
})
export class TheatreModule {}
