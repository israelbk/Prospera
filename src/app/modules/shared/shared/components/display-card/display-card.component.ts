import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imageUrl: string;
  @Input() content: string;

  constructor() {}

  ngOnInit() {}
}
