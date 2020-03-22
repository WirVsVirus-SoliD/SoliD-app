import { Component } from '@angular/core';
import { IProviderResponse } from 'src/app/common/interfaces/providers-controller.interface';

@Component({
  selector: 'app-near-by',
  templateUrl: 'near-by.page.html',
  styleUrls: ['near-by.page.scss']
})
export class NearByPage {

  public activeSegment = 'map';
  public providerList: Array<IProviderResponse> = [{
    "address": {
      "city": "string",
      "housenr": "string",
      "street": "string",
      "zip": "string"
    },
    "contactFirstName": "string",
    "contactLastName": "string",
    "crops": [
      "Erdbeeren"
    ],
    "distance": 0,
    "email": "string",
    "farmName": "string",
    "hourlyRate": 0,
    "latitude": 51.133481,
    "longitude": 10.018343,
    "minWorkPeriod": 0,
    "overnightPossible": true,
    "phone": "string",
    "pickupPossible": true,
    "pickupRange": 0,
    "providerId": 0,
    "url": "string"
  }];

  constructor(

  ) { }

  segmentChanged($event: Event) {
    this.activeSegment = ($event.target as HTMLInputElement).value;
  }

}
