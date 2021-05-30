import { CardsListComponent } from './containers/cards-list/cards-list.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatCardModule, FlexLayoutModule],
  declarations: [DisplayCardComponent, CardsListComponent],
  exports: [CardsListComponent],
})
export class SharedModule {}
