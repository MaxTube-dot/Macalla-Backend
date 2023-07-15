import { Host, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DjangoApiServiceService {
  urlBase = 'http://127.0.0.1:8000/'
  constructor(private httpClient:HttpClient) { }

  searchSiteRequest(url:string):Observable<any>{
    debugger;
    let urlRequest = this.urlBase + 'searchsite?urlsite=' + url;
    return this.httpClient.get(urlRequest);
  }
}