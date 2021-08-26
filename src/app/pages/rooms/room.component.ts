import { Component } from '@angular/core';

@Component({
  selector: 'ngx-room',
  template: `
    <router-outlet></router-outlet>
  `,  
})
export class RoomComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';  
}
