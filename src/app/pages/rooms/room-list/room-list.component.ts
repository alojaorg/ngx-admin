import { Component } from '@angular/core';

@Component({
  selector: 'ng-room-list',
  styleUrls: ['./room-list.component.scss'],
  templateUrl: './room-list.component.html',
})

export class RoomListComponent {
    list = [
        {
            id: "1",
            name: "Habitacion 1",
            status: "Libre",
            price: "10.00",
            capacity: "1",
            category: "Individual",
            roomDetails: [
                {
                    id: "r1",
                    key: "WIFI",
                    displayName: "WI-FI"
                }
            ]
        },
        {
            id: "2",
            name: "Habitacion 2",
            status: "Libre",
            capacity: "2",
            price: "20.00",
            category: "Doble",
            roomDetails: [
                {
                    id: "r2",
                    key: "WIFI",
                    displayName: "WI-FI"
                }
            ]
        },
        {
            id: "3",
            name: "Habitacion 3",
            status: "Libre",
            price: "30.00",
            capacity: "3",
            category: "Triple",
            roomDetails: [
                {
                    id: "r1",
                    key: "TV",
                    displayName: "TV"
                },
                {
                    id: "r1",
                    key: "WIFI",
                    displayName: "WI-FI"
                }
            ]
        }
    ];  
}
