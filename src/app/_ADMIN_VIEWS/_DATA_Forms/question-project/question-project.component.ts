import { IAddQuestion } from './model/IAddQuestion';
import { IProjectType } from './model/IProjectType';
import { Component, OnInit } from '@angular/core';
import { QuestionProjectService } from './service/Project-Question.service';
import { IQuestionProject } from './model/IQuestionProject';

@Component({
  selector: 'app-question-project',
  templateUrl: './question-project.component.html',
  styleUrls: ['./question-project.component.css'],
  providers: [QuestionProjectService]
})
export class QuestionProjectComponent implements OnInit {

  projectTypeList: IProjectType[];
  selectedProjectType: number;
  projectQuestionList: IQuestionProject[];
  isQuestionBankVisible = false;
  availableQuestionBankList: IQuestionProject[];

  constructor(private _questionProjectService: QuestionProjectService) {
  }

  ngOnInit() {
    this.getAllProjectType();
  }

  onshowQuestionClick(): void {
    this.isQuestionBankVisible = !this.isQuestionBankVisible;
  }

  public addQuestionToProjectType(questionId: number): void {
    const addQuestion: IAddQuestion = { questionId: questionId, projectType: this.selectedProjectType };
    console.log(addQuestion);
    this._questionProjectService.addQuestionToProjectType(addQuestion)
      .subscribe(
      (data) => {
        this.getAllAvailableQuestions(this.selectedProjectType);
        this.getAllQuestionInProjectType(this.selectedProjectType);
        alert('Question added to Project Type.');
      },
      (err) => alert(err)
      );
  }

  public deleteQuestion(questionId: number): void {
    const addQuestion: IAddQuestion = { questionId: questionId, projectType: this.selectedProjectType };
    console.log(addQuestion);
    this._questionProjectService.deleteQuestion(addQuestion)
      .subscribe(
      (data) => {
        this.getAllAvailableQuestions(this.selectedProjectType);
        this.getAllQuestionInProjectType(this.selectedProjectType);
        alert('Question Delete Successfully.');
      },
      (err) => alert(err)
      );
  }

  public onProjectTypeChange(projectType: number) {
    if (projectType === 0) {
      this.projectQuestionList = [];
      return;
    }
    this.selectedProjectType = projectType;
    this.getAllQuestionInProjectType(projectType);
    this.getAllAvailableQuestions(projectType);
  }

  public getAllAvailableQuestions(projectType: number) {
    this._questionProjectService.getAllQuestionsNotInProject(projectType)
      .subscribe(
      (data) => {
        this.availableQuestionBankList = data;
        console.log(data);
      },
      (err) => alert(err)
      );

  }

  public getAllQuestionInProjectType(projectType: number) {
    this._questionProjectService.getAllQuestionsInProjectType(projectType)
      .subscribe(
      (data) => {
        this.projectQuestionList = data;
        console.log(data);
      },
      (err) => alert(err)
      );

  }

  public getAllProjectType(): void {
    this._questionProjectService.getAllProjectType()
      .subscribe(
      (data) => { this.projectTypeList = data; console.log(data); },
      (err) => { alert(err); }
      );
  }

}
