import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule
} from '@nebular/theme';

import { ThemeModule } from '../../../@theme/theme.module';
import { RoomItemRoutingModule } from './room-item-routing.module';
import { RoomItemComponent } from './room-item.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    RoomItemRoutingModule,
    NbIconModule
  ],
  declarations: [
    RoomItemComponent
  ],
})
export class RoomsItemModule { }
