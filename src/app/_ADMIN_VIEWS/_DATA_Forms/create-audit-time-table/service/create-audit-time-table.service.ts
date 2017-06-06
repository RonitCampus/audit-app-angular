import { IProjectInfo } from '../model/IProjectInfo';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateAuditTimeTableService {

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

  public getAllProjects(): Observable<IProjectInfo[]> {
      return this._fetchData('http://10.10.11.50:8090/Admin_Services/Data_forms/CreateAuditTimeTable/getProjects');
  }

  public addProjectToTimeTable(data: Object): Observable<boolean> {
    return this._postData('http://10.10.11.50:8090/Admin_Services/Data_forms/CreateAuditTimeTable/addProject', data);
  }

}
