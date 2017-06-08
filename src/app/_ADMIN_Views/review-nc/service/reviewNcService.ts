
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, RequestOptions, Headers} from '@angular/http';
import {serverUrl} from '../../../HttpConfig/httpConfig';

@Injectable()
export class ReviewNcService {
  constructor(private _http: Http) {
  }

  private _fetchData(url: string): Observable<any> {
    return this._http.get(url)
      .map(res => res.json());
  }

  private _postData(url: string, data: object): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(url, JSON.stringify(data), options);
  }

  public getNcInfo(ncId: number): Observable<any> {
    return this._fetchData( serverUrl + '/Admin_Services/ReviewNc/ncInfo/' + ncId);
  }

  public updateNc(data: Object): Observable<boolean> {
    return this._postData( serverUrl + '/Admin_Services/ReviewNc/updateNc', data);
  }

}
