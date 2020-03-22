import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NearByPage } from './near-by.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { MapComponent } from './map/map.component';
import { ProviderListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: NearByPage }])
  ],
  declarations: [NearByPage, MapComponent, ProviderListComponent, DetailsComponent]
})
export class NearByPageModule {}
