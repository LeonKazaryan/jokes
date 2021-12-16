import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getChuckNorrisData(): Observable<any> {
    return this.http.get('http://api.icndb.com/jokes/random/20')
  }
}
