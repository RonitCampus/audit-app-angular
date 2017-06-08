import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import {serverUrl} from '../../../HttpConfig/httpConfig';

@Injectable()
export class AllNcsinProjectService {
  constructor(private _http: Http) {
  }

  private _fetchData(url: string): Observable<any> {
    return this._http.get(url)
      .map(res => res.json());
  }


  public getNcsForProject(projectId: number): Observable<any> {
    return this._fetchData( serverUrl + '/Admin_Services/Data_forms/AllNcsForProject/' + projectId);
  }

}
