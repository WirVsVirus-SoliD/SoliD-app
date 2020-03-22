import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { HelperTabsPage } from './helpers/helper-tabs/helper-tabs.page';
import { NearByPage } from './helpers/near-by/near-by.page';
import { JobsPage } from './helpers/jobs/jobs.page';
import { ProfilePage } from './helpers/profile/profile.page';
import { ProviderTabsPage } from './providers/provider-tabs/provider-tabs.page';
import { HelpersPage } from './providers/helpers/helpers.page';
import { DataPage } from './providers/data/data.page';
import { DetailsComponent } from './helpers/near-by/details/details.component';
import { ProviderResolver } from './core/resolver/provider.resolver';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomePage
  },
  {
    path: 'helper-tabs',
    component: HelperTabsPage,
    children: [
      { path: '', redirectTo: 'near-by', pathMatch: 'full' },
      {
        path: 'near-by',
        component: NearByPage,
      },
      { path: 'details/:providerId', component: DetailsComponent, resolve: { provider: ProviderResolver } },

      {
        path: 'jobs',
        component: JobsPage
      },
      {
        path: 'profile',
        component: ProfilePage
      }
    ]
  },
  {
    path: 'provider-tabs',
    component: ProviderTabsPage,
    children: [
      { path: '', redirectTo: 'helpers', pathMatch: 'full' },
      {
        path: 'helpers',
        component: HelpersPage
      },
      {
        path: 'data',
        component: DataPage
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
