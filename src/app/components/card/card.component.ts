import { Component, Input } from '@angular/core';
import {IUser} from '../../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() user: IUser;
}
