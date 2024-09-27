import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule
} from '@nebular/theme';

import { ThemeModule } from '../../../@theme/theme.module';
import { RoomListRoutingModule } from './room-list-routing.module';
import { RoomListComponent } from './room-list.component';
import { RoomsItemModule } from '../room-item/room-item.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    RoomListRoutingModule,
    NbIconModule,
    RoomsItemModule
  ],
  declarations: [
    RoomListComponent
  ],
})
export class RoomsListModule { }
