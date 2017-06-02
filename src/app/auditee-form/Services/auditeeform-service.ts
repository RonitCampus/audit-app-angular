import {IProject} from '../model/IProject';
import {IQuestion} from '../model/IQuestion';
import {IComplianceCode} from '../model/IComplianceCode';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
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

  private _postData(url: string, data: object): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this._http.post(url, JSON.stringify(data), options);
  }

  public getStatusCodes(): Observable<IComplianceCode[]> {
    return this._fetchData('http://10.10.11.50:8090/audit-app/admin/auditform/complianceStatusCodes');
  }

  public getProjectList(): Observable<IProject[]> {
    return this._fetchData('http://10.10.11.50:8090/audit-app/admin/auditform/projectList')
  }

  public getQuestion(projectId: number): Observable<any> {
    return this._fetchData('http://10.10.11.50:8090/audit-app/admin/auditform/allQuestions/' + projectId);
  }


  public saveQuestions(data: IQuestion[]): Observable<any> {
    return this._postData('http://10.10.11.50:8090/audit-app/admin/auditform/submit', data);
  }

}
