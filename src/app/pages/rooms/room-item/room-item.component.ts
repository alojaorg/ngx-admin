import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-room-item',
  styleUrls: ['./room-item.component.scss'],
  templateUrl: './room-item.component.html',
})
export class RoomItemComponent {
  @Input() room = { name: '', price: '', category: '', status: '', capacity: '', roomDetails: [] };
}
