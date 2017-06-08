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

  auditInfo: IUserNcRegisterAuditInfo;
  ncId: number;
  todaysDate: String;

  constructor(private _userNcRegisterService: UserNcRegisterService, private _activatedRoute: ActivatedRoute) {
    this.todaysDate = this.getTodaysDate();
  }

  ngOnInit() {
    this.ncId = this._activatedRoute.snapshot.params['ncId'];
    this.getAuditInfo(this.ncId);
  }

  formSubmit(userNcForm: any): void {
    this._userNcRegisterService.updateNcRegister(userNcForm.value)
      .subscribe(
      (data) => {
        if (Boolean(data) === true) {
          this.getAuditInfo(this.ncId);
        }
      },
      (err) => alert(err)
      );
  }

  getAuditInfo(ncId: number) {
    this._userNcRegisterService.getProjectInfo(ncId)
      .subscribe(
      (data) => { this.auditInfo = data; /* console.log(this.auditInfo) */},
      (err) => { this.showError(err); }
      );
  }

  private showError(err: String): void {
    console.log(err);
  }

  private getTodaysDate(): String {
    const date: Date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).toString();
  }
}
