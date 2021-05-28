import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'app',
    children: [
      {
        path: 'Theater',
        loadChildren: () =>
          import('./modules/theater/theater.module').then(
            (module) => module.TheatreModule
          ),
      },
      {
        path: 'Weather',
        loadChildren: () =>
          import('./modules/weather/weather.module').then(
            (module) => module.WeatherModule
          ),
      },
      {
        path: '**',
        redirectTo: 'Theater',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/app',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
