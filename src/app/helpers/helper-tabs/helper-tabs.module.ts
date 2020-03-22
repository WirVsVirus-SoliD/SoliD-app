import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HelperTabsPage } from './helper-tabs.page';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [HelperTabsPage]
})
export class HelperTabsPageModule {}
