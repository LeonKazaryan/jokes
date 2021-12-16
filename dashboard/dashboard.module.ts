import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {TableComponent} from "./table/table.component";
import {CardsComponent} from "./cards/cards.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'table',
        loadChildren: () => import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)
      }
    ]
  }
]


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {
}
