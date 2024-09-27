import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomItemComponent } from './room-item.component';

const routes: Routes = [
  {
    path: '/rooms-list',
    component: RoomItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoomItemRoutingModule {
}

