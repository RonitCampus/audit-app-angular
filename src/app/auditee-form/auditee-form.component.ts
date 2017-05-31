import {IProject} from "./model/IProject";
import {AuditeeFormService} from "./Services/auditeeform-service";
import {IComplianceCode} from "./model/IComplianceCode";
import {SnotifyService} from "ng-snotify";
import {Component, OnInit} from "@angular/core";
import {IQuestion} from "./model/IQuestion";

@Component({
  selector: 'app-auditee-form',
  templateUrl: './auditee-form.component.html',
  styleUrls: ['./auditee-form.component.css'],
  providers: [AuditeeFormService]
})
export class AuditeeFormComponent implements OnInit {

  public complianceCodes: IComplianceCode[];
  public projects: IProject[];
  public Questions: IQuestion[];

  constructor(private _auditeeFormService: AuditeeFormService, private snotifyService: SnotifyService) {
  }

  ngOnInit() {
    this.getProjectList();
    this.getComplianceCodes();
  }


  public onProjectChange(projectId: number): void {
    console.log(projectId);
    this.fetchProjectQuestions(projectId);
  }

  private fetchProjectQuestions(projectId: number) {
    this._auditeeFormService.getQuestion(projectId)
      .subscribe(
        (data) => {
          this.Questions = data;
        },
      );
  }

  private getProjectList() {
    this._auditeeFormService.getProjectList()
      .subscribe(
        (data) => {
          this.projects = data;
        },
        (err) => this.showError(err)
      );
  }

  private getComplianceCodes() {
    this._auditeeFormService.getStatusCodes()
      .subscribe(
        (data) => {
          this.complianceCodes = data;
        },
        (err) => this.showError(err)
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

    alert(percentage);

  }

  private showError(err: any) {
    console.error(err);
    this.snotifyService.error('Server Error !', ' Response Sataus : ' + err.status, {timeout: 9000});
  }


}
