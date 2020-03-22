import { Component } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import { BackendService } from 'src/app/common/services/backend.service';
import { IProviderResponse } from 'src/app/common/interfaces/providers-controller.interface';

@Component({
  selector: 'app-near-by',
  templateUrl: 'near-by.page.html',
  styleUrls: ['near-by.page.scss', '../../../../node_modules/leaflet/dist/leaflet.css']
})
export class NearByPage {

  map: Map;
  newMarker: any;

  providers: Array<IProviderResponse>;

  constructor(
    private backendService: BackendService
  ) { }

  ionViewDidEnter() {
    this.loadMap(); // example: https://medium.com/@bviveksingh96/using-leaflet-with-ionic-4-f7acbd1c2464
    this.backendService.getProviders(51.133481, 10.018343)
      .subscribe(res => this.providers = res);
  }

  loadMap() {
    this.map = new Map('mapId').setView([51.133481, 10.018343], 7);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  locatePosition() {
    this.map.locate({ setView: true }).on('locationfound', (e: any) => {
      this.newMarker = marker([e.latitude, e.longitude], {
        draggable:
          true
      }).addTo(this.map);
      this.newMarker.bindPopup("You are located here!").openPopup();
    });
  }
}
