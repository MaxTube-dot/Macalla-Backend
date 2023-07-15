import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DjangoApiServiceService {
url = 'http://127.0.0.1:8000/searchsite?urlsite=GOOGLE'
  constructor(private httpClient:HttpClient) { }

  searchSiteRequest(url:string):Observable<any>{
    return this.httpClient.get(url+'searchsite?urlsite=' + url);

  }
}
