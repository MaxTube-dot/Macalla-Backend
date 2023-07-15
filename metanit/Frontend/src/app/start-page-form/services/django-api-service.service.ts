import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DjangoApiServiceService {
url = 'http://localhost:8000/'
  constructor(private httpClient:HttpClient) { }

  searchSiteRequest(url:string):Observable<any>{
    return this.httpClient.get(url+'searchsite&url=' + url);

  }
}
