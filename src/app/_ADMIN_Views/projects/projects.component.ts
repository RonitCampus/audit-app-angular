import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { ProjectService } from './service/project-service';
import { IProject } from './../auditee-form/model/IProject';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {


  public projectList: IProject[];

  constructor(private _projectService: ProjectService, private snotifyService: SnotifyService,
    private _route: Router) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this._projectService.getProject()
      .subscribe(
      (data) => { this.projectList = data; console.log(data) },
      (err) => { this.showError(err); }
      );
  }

  onDoAuditClick(projectId: number): void {
    this._route.navigate(['Admin/auditeeForm', projectId]);
  }

  onShowAllNcs(projectId: number): void {
    this._route.navigate(['Admin/showAll-ncs/', projectId]);
  }

  onNcRegisterClick(projectId: number): void {
    console.log('onNcRegister Click : ' + projectId);
    this._route.navigate(['Admin/ncRegister', projectId]);
  }

  private showError(err: any) {
    console.error(err);
    this.snotifyService.error('Server Error !', ' Response Sataus : ' + err.status, { timeout: 9000 });
  }

}
