import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { IProvider } from 'src/app/common/interfaces/providers-controller.interface';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'solid-provider-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ProviderListComponent {

  public providerList: Array<IProvider> = [];

  @Input() public activeSegment: string;
  @Input() public providerGroups: Array<Array<IProvider>> = [];
  @Output() public segmentHasChanged = new EventEmitter<string>();
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.providerList = this.providerGroups.reduce((o, c) => o.concat(c), []);
  }

  segmentChanged($event: Event) {
    this.segmentHasChanged.emit(($event.target as HTMLInputElement).value);
  }

  openDetails(provider: IProvider) {
    this.router.navigate(['helper-tabs', 'details', provider.providerId]);
  }

}
