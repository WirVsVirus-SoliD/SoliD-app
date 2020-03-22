import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProvider } from 'src/app/common/interfaces/providers-controller.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'solid-provider-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.scss']
})
export class DetailsComponent {

  public provider: IProvider;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.provider = this.route.snapshot.data.provider;
  }

}
