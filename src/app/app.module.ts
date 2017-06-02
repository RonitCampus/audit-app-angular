import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { SnotifyModule, SnotifyService } from 'ng-snotify'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIModule } from 'ng-block-ui';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { AuditeeFormComponent } from './auditee-form/auditee-form.component';
import { AuditTimetableComponent } from './audit-timetable/audit-timetable.component';
import { ProjectsComponent } from './projects/projects.component';
import { NcRegisterFormComponent } from './nc-register-form/nc-register-form.component';
import { UserNcRegisterComponent } from './_USER_Views/user-nc-register/user-nc-register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionBankComponent,
    AuditeeFormComponent,
    AuditTimetableComponent,
    ProjectsComponent,
    NcRegisterFormComponent,
    UserNcRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BlockUIModule,
    SnotifyModule,
    DatePickerModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/userNcRegister', pathMatch: 'full' },
      { path: 'question-bank', component: QuestionBankComponent },
      { path: 'auditeeForm/:projId', component: AuditeeFormComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'ncRegister/:projId', component: NcRegisterFormComponent },
      { path: 'userNcRegister/:projectId', component: UserNcRegisterComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
