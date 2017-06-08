import { IProject } from '../../auditee-form/model/IProject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import {serverUrl} from '../../../HttpConfig/httpConfig';

@Injectable()
export class ProjectService {
  constructor(private _http: Http) {
  }

  private _fetchData(url: string): Observable<any> {
    return this._http.get(url)
      .map(res => res.json());
  }


  public getProject(): Observable<IProject[]> {
    return this._fetchData( serverUrl + '/audit-app/admin/auditform/projectList');
  }

}
