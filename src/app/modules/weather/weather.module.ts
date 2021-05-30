import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WorldDisplayComponent } from './containers/world-display/world-display.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, WeatherRoutingModule, HttpClientModule],
  declarations: [WeatherComponent, WorldDisplayComponent],
  providers: [HttpClientModule],
})
export class WeatherModule {}
