import { Injectable } from '@angular/core';

import * as L from 'leaflet';
import { BaseService } from 'src/app/core/services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class MapService extends BaseService {

  private activeMapProvider: string = 'openstreetmap';
  private eL: any;
  private mapProvider: any;

  constructor() {
    super('app.common.services.map.service');

    let p = [];

    this.mapProvider = {
      openstreetmap: {
        apiKey: '',
        tileMapUrl: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 16,
        zoomDelta: 0.25,
        zoomSnap: 0.25,
        wms: false,
        zoomControl: false
      }
    };

  }

  public getMapAPI(): any  {
    this.eL = L;
    return this.eL;
  }

  public getMapConfig(): any {
    return this.mapProvider[this.activeMapProvider];
  }

  public initMap(config: any): Promise<any> {

    return new Promise((resolve) => {

      let mapConfig = this.getMapConfig();

      let zoom = (config.position) ? config.position.zoom : 0;
      zoom = Number(zoom.toFixed(0));
      zoom = (zoom > mapConfig.maxZoom) ? mapConfig.maxZoom : zoom;

      let mapSelector = (config.mapId) ? config.mapId : ((config.mapElement) ? config.mapElement : 'appmap');
      let initView = (config.position) ? { position: [config.position.latitude, config.position.longitude], zoom: config.position.zoom } : { p: [0, 0], z: 0 };
      const map = (!config.bounds) ? this.getMapAPI().map(mapSelector, { zoomControl: false }).setView(initView.position, initView.zoom) : this.getMapAPI().map(mapSelector, { zoomControl: false }).fitBounds(config.bounds);

    if(config.onMoveEnd) map.on('moveend', config.onMoveEnd);

      let layer = this._initMapTiles();
      layer.addTo(map);

      map.whenReady(data => {
        if(config.onLoad) { config.onLoad(data, map); }
        resolve(map);
      });


    });

  }

  private _initMapTiles(): any {

    let mapConfig = this.getMapConfig();
    let url = mapConfig.tileMapUrl;

    let layer;

    if(!mapConfig.wms) {

      layer = this.getMapAPI().tileLayer(url, {
        attribution: mapConfig.attribution,
        preferCanvas: true,
        maxZoom: mapConfig.maxZoom,
        accessToken: mapConfig.apiKey
      });

    } else {

      layer = this.getMapAPI().tileLayer.wms(url, {
        kid: mapConfig.apiKey,
        version: mapConfig.version,
        format: mapConfig.format,
        tiled: true,
        transparent: mapConfig.transparent,
        layers: mapConfig.layers.default,
        attribution: mapConfig.attribution,
        maxZoom: mapConfig.maxZoom
      });

    }

    return layer;
  }

}
