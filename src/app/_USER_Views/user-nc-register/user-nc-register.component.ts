import { ActivatedRoute } from '@angular/router';
import { UserNcRegisterService } from './service/UserNcRegister-Service';
import { IUserNcRegisterAuditInfo } from './model/IUserNcRegisterAuditInfo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nc-register',
  templateUrl: './user-nc-register.component.html',
  styleUrls: ['./user-nc-register.component.css'],
  providers: [UserNcRegisterService]
})
export class UserNcRegisterComponent implements OnInit {

  auditInfo :IUserNcRegisterAuditInfo;
  projectId :number;

  constructor(private _userNcRegisterService :UserNcRegisterService, private _activatedRoute : ActivatedRoute) {
   }

  ngOnInit() {
    this.projectId = this._activatedRoute.snapshot.params['projectId'];
    this.getAuditInfo(this.projectId);
  }

formSubmit( userNcForm : any ): void{
console.log(userNcForm.value);
}

  getAuditInfo(projectId:number){
    this._userNcRegisterService.getProjectInfo(projectId)
    .subscribe(
      (data)=>{this.auditInfo = data; console.log(this.auditInfo)},
      (err)=>{this.showError(err);},
      ()=>{}
    );
  }

  private showError(err :String): void{
    console.log(err);
  }


}
