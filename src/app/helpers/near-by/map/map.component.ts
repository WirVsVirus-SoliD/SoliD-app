import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Map } from 'leaflet';
import { MapService } from 'src/app/common/services/map.service';
import { uuid } from 'uuidv4';
import { IProvider } from 'src/app/common/interfaces/providers-controller.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'solid-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})
export class MapComponent {

  public mapId: string = 'map_' + uuid();
  public searchResultList = [];
  public searchValue: string;
  public showSearchResultList = false;
  private map: Map;

  private resultMock = ['Mühlacker', 'Mühlberg'];

  @Input() public activeSegment: string;
  @Input() public providerGroups: Array<Array<IProvider>> = [];
  @Output() public segmentHasChanged = new EventEmitter<string>();
  constructor(
    private mapSrv: MapService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.loadMap().then(() => {
      setTimeout(() => {
        this.map.invalidateSize(false);
        if(this.providerGroups.length > 0) {
          const eL = this.mapSrv.getMapAPI();
          this.providerGroups.forEach(p => this.createMarker(p));
          this.map.fitBounds(new eL.LatLngBounds(this.providerGroups.reduce((o, c) => o.concat(c), []).map(p => [p.latitude, p.longitude])), { padding: [30, 30] });
          this.cdRef.markForCheck();
        }
      });
    });
  }

  search($event: Event) {
    this.searchValue =($event.target as HTMLInputElement).value;
    this.searchResultList = this.resultMock.filter(i => i.includes(this.searchValue));
    this.showSearchResultList = this.searchResultList.length > 1 || this.searchValue !== this.searchResultList[0];
  }

  selectSearchResult(item: string) {
    this.searchValue = item;
  }

  segmentChanged($event: Event) {
    this.segmentHasChanged.emit(($event.target as HTMLInputElement).value);
  }

  private async loadMap() {


    return this.mapSrv.initMap({
          mapId: this.mapId,
          position: { latitude: 0, longitude: 0, zoom: 16 },
          onMoveEnd: (e) => {

          }
      }).then(map => {
        this.map = map;
        return map;
      });
  }

  private createMarker(providerGroup: Array<IProvider>): any {
    const eL = this.mapSrv.getMapAPI();
    const boundingBox = new eL.LatLngBounds(providerGroup.map(p => [p.latitude, p.longitude]));
    const className = 'custom-marker-icon';
    let markerIcon;

    if(providerGroup.length > 1) {
      markerIcon = eL.divIcon({ className: className, html: '<span class="outer"><span class="inner">' + providerGroup.length +'</span></span>' });
    } else {
      markerIcon = eL.divIcon({ className: className, html: '<span class="provider"><ion-icon class="solid-provider"></ion-icon></span>' });
    }
    const marker = eL.marker(boundingBox.getCenter(), { icon: markerIcon }).addTo(this.map);
    marker.addEventListener('click', () => { console.log('click'); })
    return marker;
  }

}
