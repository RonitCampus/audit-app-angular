import { Injectable } from '@angular/core';
import { IProjectType } from '../model/IProjectType';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IQuestionProject } from '../model/IQuestionProject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {serverUrl} from '../../../../HttpConfig/httpConfig';

@Injectable()
export class QuestionProjectService {
    constructor(private _http: Http) { }

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

    public getAllQuestionsInProjectType(projectType: number): Observable<IQuestionProject[]> {
        return this._fetchData( serverUrl + '/Admin_Services/Data_forms/QuestionProject/allQuestions/' + projectType);
    }

    public getAllQuestionsNotInProject(projectType: number): Observable<IQuestionProject[]> {
        return this._fetchData( serverUrl + '/Admin_Services/Data_forms/QuestionProject/allAvailableQuestions/' + projectType);
    }

    public addQuestionToProjectType(data: Object): Observable<boolean> {
        return this._postData( serverUrl + '/Admin_Services/Data_forms/QuestionProject/addQuestionToProjectType', data);
    }

    public deleteQuestion(data: Object) {
        return this._postData( serverUrl + '/Admin_Services/Data_forms/QuestionProject/deleteQuestionFromProjectType', data);
    }

}
