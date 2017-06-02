import { NgBlockUI, BlockUI } from 'ng-block-ui/dist';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IProject } from './model/IProject';
import { AuditeeFormService } from './Services/auditeeform-service';
import { IComplianceCode } from './model/IComplianceCode';
import { SnotifyService } from 'ng-snotify';
import { Component, OnInit } from '@angular/core';
import { IQuestion } from './model/IQuestion';

@Component({
  selector: 'app-auditee-form',
  templateUrl: './auditee-form.component.html',
  styleUrls: ['./auditee-form.component.css'],
  providers: [AuditeeFormService]
})
export class AuditeeFormComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  public complianceCodes: IComplianceCode[];
  public projects: IProject[];
  public Questions: IQuestion[];

  constructor(private _auditeeFormService: AuditeeFormService, private snotifyService: SnotifyService,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getProjectList();
    this.getComplianceCodes();
    const projectId = this._activatedRoute.snapshot.params['projId'];
    this.fetchProjectQuestions(projectId);
  }


  public onProjectChange(projectId: number): void {
    console.log(projectId);
    this.fetchProjectQuestions(projectId);
  }

  private fetchProjectQuestions(projectId: number) {
    this.showLoader();
    this._auditeeFormService.getQuestion(projectId)
      .subscribe(
        (data) => { this.Questions = data; },
        () => { this.hideLoader(); }
      );
  }

  private getProjectList() {
    this.showLoader();
    this._auditeeFormService.getProjectList()
      .subscribe(
        (data) => { this.projects = data; },
        (err) => { this.showError(err); },
        () => { this.hideLoader(); }
      );
  }

  private getComplianceCodes() {
    this.showLoader();
    this._auditeeFormService.getStatusCodes()
      .subscribe(
        (data) => { this.complianceCodes = data; },
        (err) => { this.showError(err) },
        () => { this.hideLoader(); }
      );
  }

  public onSubmit(): void {
    this._auditeeFormService.saveQuestions(this.Questions)
      .subscribe(
      (data) => {
        data = data.json();
        alert('Rows Updated : ' + data);
      },
      (err) => {
        this.showError(err);
      }
      );
  }

  public getScore(): void {
    let compliantTotal = 0;
    let nonCompliantTotal = 0;
    let total = 0;

    for (let i = 0; i < this.Questions.length; i++) {
      if (Number(this.Questions[i].complianceStatus) === 201) {
        compliantTotal += this.Questions[i].weightage;
      } else if (Number(this.Questions[i].complianceStatus) === 202) {
        nonCompliantTotal += this.Questions[i].weightage;
      }
    }

    total = compliantTotal + nonCompliantTotal;
    const percentage = (compliantTotal * 100) / (total === 0 ? 1 : total);

    alert('Project Score : ' + Math.round(percentage) + ' %');

  }


  private showLoader() {
    this.blockUI.start('Loading Data...');
  }

  private hideLoader() {
    this.blockUI.stop();
  }

  private showError(err: any) {
    this.hideLoader();
    console.error(err);
    this.snotifyService.error('Server Error !', ' Response Sataus : ' + err.status, { timeout: 9000 });
  }


}
