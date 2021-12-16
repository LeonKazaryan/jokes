import { Component, OnInit } from '@angular/core';
import {HttpService} from "../table/http.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  dataSource:any = [];

  constructor(private service: HttpService) {

  }

  ngOnInit(): void {
    this.service.getChuckNorrisData().subscribe(res=>{
      this.dataSource = res.value;
      console.log(res);
    });
  }

}
