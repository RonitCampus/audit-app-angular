import { IUserNcRegisterAuditInfo } from './../model/IUserNcRegisterAuditInfo';

import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {serverUrl} from '../../../HttpConfig/httpConfig';


@Injectable()
export class UserNcRegisterService {

  constructor(private _http: Http) {
  }

  private _fetchData(url: string): Observable<any> {
    return this._http.get(url)
      .map(res => res.json());
  }

  public getProjectInfo(projectId: number): Observable<IUserNcRegisterAuditInfo> {
    return this._fetchData(serverUrl + '/UserServices/NcRegister/AuditInfo/' + projectId);
  }

}
