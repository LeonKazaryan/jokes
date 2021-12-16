import { Component, OnInit } from '@angular/core';
import {HttpService} from "./http.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'joke'
  ];
  dataSource = [];

  constructor(private service: HttpService) {

  }

  ngOnInit(): void {
    this.service.getChuckNorrisData().subscribe(res=>{
      this.dataSource = res.value;
    });
  }
}
