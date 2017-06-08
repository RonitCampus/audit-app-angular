import { observable } from 'rxjs/symbol/observable';
import { IUserNcRegisterAuditInfo } from './../model/IUserNcRegisterAuditInfo';

import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { serverUrl } from '../../../HttpConfig/httpConfig';


@Injectable()
export class UserNcRegisterService {

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

  public getProjectInfo(projectId: number): Observable<IUserNcRegisterAuditInfo> {
    return this._fetchData(serverUrl + '/UserServices/NcRegister/AuditInfo/' + projectId);
  }

  public updateNcRegister(data: Object): Observable<boolean> {
    return this._postData( serverUrl + '/UserServices/NcRegister/Update', data);
  }

}
