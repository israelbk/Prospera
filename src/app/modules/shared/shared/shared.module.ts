import { CardsListComponent } from './containers/cards-list/cards-list.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [DisplayCardComponent, CardsListComponent],
  exports: [CardsListComponent],
})
export class SharedModule {}
