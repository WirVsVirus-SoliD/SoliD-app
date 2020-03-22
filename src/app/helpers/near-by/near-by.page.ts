import { Component } from '@angular/core';
import { IProvider, IHelper } from 'src/app/common/interfaces/providers-controller.interface';
import { Crops } from 'src/app/common/enums/crops.enum';
import { BackendService } from 'src/app/common/services/backend.service';

@Component({
  selector: 'app-near-by',
  templateUrl: 'near-by.page.html',
  styleUrls: ['near-by.page.scss']
})
export class NearByPage {

  public activeSegment = 'map';
  public providerList: Array<IProvider>;

  constructor(
    private backendService: BackendService
  ) {
    this.backendService.getProviders(51.133481, 10.018343).subscribe(res => this.providerList = res);
  }

  segmentChanged($event: Event) {
    this.activeSegment = ($event.target as HTMLInputElement).value;
  }

}
