import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomComponent } from './room.component';

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
    children: [
      {
        path: 'rooms',
        component: RoomListComponent,
      },
      {
        path: 'room-details',
        component: RoomDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoomsRoutingModule {
}

