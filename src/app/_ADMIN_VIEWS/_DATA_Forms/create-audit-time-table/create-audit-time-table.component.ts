import { CreateAuditTimeTableService } from './service/create-audit-time-table.service';
import { IProjectInfo } from './model/IProjectInfo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-audit-time-table',
  templateUrl: './create-audit-time-table.component.html',
  styleUrls: ['./create-audit-time-table.component.css'],
  providers: [CreateAuditTimeTableService]
})
export class CreateAuditTimeTableComponent implements OnInit {

  public projectList: IProjectInfo[];
  public projectAuditee = null;

  constructor(private _createAuditTimeTableService: CreateAuditTimeTableService) { }

  ngOnInit() {
    this.getProjectList();
  }

  public onSubmit(auditTimeTableForm: any) {
    console.log(auditTimeTableForm.value);
    this._createAuditTimeTableService.addProjectToTimeTable(auditTimeTableForm.value)
      .subscribe(
      (data) => {
        if (Boolean(data) === true) {
          auditTimeTableForm.resetForm();
          alert('Project Added to Time Table');
        }else {
          alert('Server Error Occured');
        }
      },
      (err) => alert(err)
      );
  }

  public onProjectChange(selectedProject: number): void {
    console.log(selectedProject);
    this.projectAuditee = null;
    this.projectList.forEach(project => {
      if (project.projectCode === Number(selectedProject)) {
        this.projectAuditee = project.projectManager;
        return;
      }
    });
  }

  private getProjectList() {
    this._createAuditTimeTableService.getAllProjects()
      .subscribe(
      (data) => {
        this.projectList = data;
      },
      (err) => alert(err)
      );
  }
}
