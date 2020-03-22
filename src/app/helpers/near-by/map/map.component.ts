import { Component, Input } from '@angular/core';
import { Map } from 'leaflet';
import { BackendService } from 'src/app/common/services/backend.service';
import { IProviderResponse } from 'src/app/common/interfaces/providers-controller.interface';
import { MapService } from 'src/app/common/services/map.service';
import { uuid } from 'uuidv4';

@Component({
  selector: 'solid-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})
export class MapComponent {

  public mapId: string = 'map_' + uuid();
  private map: Map;

  @Input() public activeSegment: string;
  @Input() public providerList: Array<IProviderResponse> = [];
  constructor(
    private mapSrv: MapService
  ) { }

  ngAfterViewInit() {
    this.loadMap().then(() => {
      setTimeout(() => {
        this.map.invalidateSize(false);
      });
    });
  }

  private async loadMap() {

    return this.mapSrv.initMap({
          mapId: this.mapId,
          bounds: this.providerList.map(p => [p.latitude, p.longitude]),
          onMoveEnd: (e) => {
          }
      }).then(map => {
        this.map = map;
        return map;
      });
  }

}
