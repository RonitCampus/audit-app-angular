import { Component, OnInit } from '@angular/core';
import { ProjectMasterService } from './service/ProjectMaster-Service'
import { IProjectType } from './model/IProjectType';


@Component({
  selector: 'app-project-master',
  templateUrl: './project-master.component.html',
  styleUrls: ['./project-master.component.css'],
  providers: [ProjectMasterService]
})
export class ProjectMasterComponent implements OnInit {

  public projectTypeList: IProjectType[];

  constructor(private _projectMasterService: ProjectMasterService) {

  }

  ngOnInit() {
    this.getAllProjectType();
  }


  private getAllProjectType(): void {
    this._projectMasterService.getAllProjectType()
      .subscribe(
      (data) => { this.projectTypeList = data; },
      (err) => { console.log(err); }
      );
  }

  public onSubmit(projectMasterForm: any) {
    // console.log(projectMasterForm.value);
    // projectMasterForm.resetForm();
    this._projectMasterService.addnewProject(projectMasterForm.value)
      .subscribe(
      (data) => {
        if (Boolean(data) === true) {
          projectMasterForm.resetForm();
          alert('Projected Added Successfully');
        }else {
          alert('Server Error !');
        }
      },
      (err) => { alert(err); }
      );
  }

}
