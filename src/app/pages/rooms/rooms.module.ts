import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbAccordionModule,
  NbListModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { RoomsRoutingModule } from './room-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { RoomComponent } from './room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomItemComponent } from './room-item/room-item.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    RoomsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbAccordionModule,
    NbListModule
  ],
  declarations: [
    RoomComponent,
    RoomListComponent,
    RoomItemComponent,
    RoomDetailsComponent
  ],
})
export class RoomsModule { }
