import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheaterComponent } from './theater.component';
import { TheaterRoutingModule } from './theater-routing.module';

@NgModule({
  imports: [CommonModule, TheaterRoutingModule],
  declarations: [TheaterComponent],
})
export class TheatreModule {}
