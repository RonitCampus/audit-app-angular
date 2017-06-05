import { IProjectInfo } from './model/IProjectInfo';
import { NcregisterService } from './service/ncregister-service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nc-register-form',
  templateUrl: './nc-register-form.component.html',
  styleUrls: ['./nc-register-form.component.css'],
  providers: [NcregisterService]
})

export class NcRegisterFormComponent implements OnInit {

  projectInfo: any;

  constructor(private _activatedRoute: ActivatedRoute, private _ncRegisterService: NcregisterService) {
    this.projectInfo = null;
  }

  ngOnInit() {
    const projectId = this._activatedRoute.snapshot.params['projId'];
    this.getProjectInfo(projectId);

  }


  getProjectInfo(projectId: number): void {
    this._ncRegisterService.getProjectInfo(projectId)
      .subscribe(
      (data) => { this.projectInfo = data; console.log(this.projectInfo); },
      (err) => { console.log(err); }
      );
  }

  test(){
    console.log(this.projectInfo);
  }



}
