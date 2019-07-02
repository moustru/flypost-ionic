import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: '../orders/orders.module#OrdersModule'
          },
          {
            path: 'order/:id',
            loadChildren: '../orders/single-order/single-order.module#SingleOrderModule'
          }
        ]
      },
      {
        path: 'pickups',
        children: [
          {
            path: '',
            loadChildren: '../pickups/pickups.module#PickupsModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../settings/settings.module#SettingsModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/orders',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/orders',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
