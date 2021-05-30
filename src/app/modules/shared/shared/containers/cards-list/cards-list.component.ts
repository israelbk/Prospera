import { Observable, of } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../../model/card-data';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent implements OnInit {
  @Input() cardsData: Observable<CardData[]>;
  constructor() {
    const temp: CardData[] = [
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content here',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
    ];

    this.cardsData = of(temp);
  }

  ngOnInit() {}
}
