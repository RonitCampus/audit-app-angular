import { IProject } from '../model/IProject';
import { IComplianceCode } from '../model/IComplianceCode';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs/symbol/observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/Operator';

@Injectable()
export class AuditeeFormService {

  constructor(private _http: Http) {
  }

  private _fetchData(url: string): Observable<any> {
    return this._http.get(url)
      .map(res => res.json());
  }

  public getStatusCodes(): Observable<IComplianceCode[]> {
    return this._fetchData('http://10.10.11.50:8080/audit-app/admin/auditform/complianceStatusCodes');
  }

  public getProjectList(): Observable<IProject[]> {
    return this._fetchData('http://10.10.11.50:8080/audit-app/admin/auditform/projectList')
  }

  public getQuestion(projectId: number): Observable<any> {
    return this._fetchData('http://10.10.11.50:8080/audit-app/admin/auditform/allQuestions/' + projectId);
  }
}
