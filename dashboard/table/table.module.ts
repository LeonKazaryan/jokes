import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "./table.component";
import {MatTableModule} from "@angular/material/table";

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },

]

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
  ]
})
export class TableModule { }
