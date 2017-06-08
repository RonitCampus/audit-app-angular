import { Injectable } from '@angular/core';
import { observable } from 'rxjs/symbol/observable';
import { ICategory } from './../models/ICategory';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/Operator';
import {serverUrl} from "../../../../HttpConfig/httpConfig";

@Injectable()
export class QuestionbankService {

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


  public getQuestionCategories(): Observable<ICategory[]> {
    return this._fetchData( serverUrl + '/audit-app/admin/question-bank/get-categories');
  }

  public addQuestion(data: object): Observable<Response> {
    return this._postData( serverUrl + '/audit-app/admin/question-bank/add-question', data);
  }


}
