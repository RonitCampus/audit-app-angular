import { IProjectInfo } from './../model/IProjectInfo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class NcregisterService {
  constructor(private _http: Http) {
  }

  private _fetchData(url: string): Observable<any> {
    return this._http.get(url)
      .map(res => res.json());
  }


  public getProjectInfo(projectId: number): Observable<IProjectInfo> {
    return this._fetchData('http://10.10.11.50:8090/audit-app/admin/ncform/getProjectInfo/' + projectId);
  }

}
