import { IProjectInfo } from './../model/IProjectInfo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { serverUrl } from '../../../HttpConfig/httpConfig';

@Injectable()
export class NcregisterService {
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

  public getProjectInfo(projectId: number): Observable<IProjectInfo> {
    return this._fetchData(serverUrl + '/audit-app/admin/ncform/getProjectInfo/' + projectId);
  }

  public createNcForm(data: Object): Observable<boolean> {
    return this._postData(serverUrl + '/audit-app/admin/ncform/createNcForm', data);
  }

}
