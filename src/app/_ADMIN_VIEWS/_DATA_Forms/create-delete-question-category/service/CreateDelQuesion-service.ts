import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IQuestionCategory } from '../model/IQuestionCateory';

@Injectable()
export class CreateDelQuestionService {
  constructor(private _http: Http) { }

  private _fetchData(url: string): Observable<any> {
    return this._http.get(url)
      .map(res => res.json());
  }

  private _delete(url: string, id: number): Observable<any> {
    return this._http.delete(url + '/' + id)
      .map(res => res.json());
  }

  private _postData(url: string, data: object): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(url, JSON.stringify(data), options);
  }

  public getAllQuestionCategory(): Observable<IQuestionCategory[]> {
    return this._fetchData('http://10.10.11.50:8090/Admin_Services/Data_forms/QuestionCategory/GetAll');
  }

  public addQuestionCategory(categoryDesc: object): Observable<boolean> {
    return this._postData('http://localhost:8090/Admin_Services/Data_forms/QuestionCategory/Add', categoryDesc);
  }

  public deleteCategory(id: number): Observable<boolean> {
    return this._delete('http://localhost:8090/Admin_Services/Data_forms/QuestionCategory/Delete', id);
  }
}
