import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService  {
  private baseUrl: string = "http://localhost:4567/";

  constructor(private _http: Http) {
  }

  get(url: string, urlParams?: URLSearchParams) {
    return this._http.get(this.baseUrl + url, urlParams);
  }

  post(url: string, body: any) {
    let options = {
      headers: new Headers({
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }),
    };

    return this._http.post(this.baseUrl + url, body, options).toPromise()
      .then((res: any)=> {
        return JSON.parse(res['_body']);
      })
  }
}
