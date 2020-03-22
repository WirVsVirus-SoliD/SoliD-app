import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IProvider } from 'src/app/common/interfaces/providers-controller.interface';
import { BackendService } from 'src/app/common/services/backend.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-near-by',
  templateUrl: 'near-by.page.html',
  styleUrls: ['near-by.page.scss']
})
export class NearByPage {

  public activeSegment = 'map';
  public providerGroups: Array<Array<IProvider>> = [];

  constructor(
    private backendService: BackendService,
    private cdRef: ChangeDetectorRef
  ) {
    this.backendService.getProviders(48.8848234, 9.1261528, 100).subscribe(res => {
      this.providerGroups = res.map(r => [r]);
      this.cdRef.markForCheck();
    });
  }

  segmentChanged($value: string) {
    this.activeSegment = $value;
  }

}
