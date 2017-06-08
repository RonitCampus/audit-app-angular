import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProjectType } from '../model/IProjectType';
import { serverUrl } from '../../../../HttpConfig/httpConfig';

@Injectable()
export class ProjectMasterService {

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

  public getAllProjectType(): Observable<IProjectType[]> {
    return this._fetchData( serverUrl + '/Admin_Services/Data_forms/ProjectMaster/ProjectTypes');
  }

  public addnewProject(data: Object): Observable<Boolean> {
    return this._postData( serverUrl + '/Admin_Services/Data_forms/ProjectMaster/addNewProject', data);
  }

}
