import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dataSource =[];
  public routes = [
    {
      path: 'table',
      viewValue: 'Table',
      img: '',
    },
    {
      path: 'cards',
      viewValue: 'Cards',
      img: '',
    }
  ]

  constructor(private router: Router) {
  }
  ngOnInit(): void {  }

  public navigateTo(path: string): void{
    this.router.navigate(['dashboard', path])
  }

  public navigateToDashboard(): void{
    this.router.navigate(['dashboard'])
  }

}
