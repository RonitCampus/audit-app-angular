import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { SnotifyModule, SnotifyService } from 'ng-snotify'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIModule } from 'ng-block-ui';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionBankComponent } from './_ADMIN_Views/question-bank/question-bank.component';
import { AuditeeFormComponent } from './_ADMIN_Views/auditee-form/auditee-form.component';
import { AuditTimetableComponent } from './_ADMIN_Views/audit-timetable/audit-timetable.component';
import { ProjectsComponent } from './_ADMIN_Views/projects/projects.component';
import { NcRegisterFormComponent } from './_ADMIN_Views/nc-register-form/nc-register-form.component';
import { UserNcRegisterComponent } from './_USER_Views/user-nc-register/user-nc-register.component';
import { LoginComponent } from './_Login_View/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionBankComponent,
    AuditeeFormComponent,
    AuditTimetableComponent,
    ProjectsComponent,
    NcRegisterFormComponent,
    UserNcRegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BlockUIModule,
    SnotifyModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'question-bank', component: QuestionBankComponent },
      { path: 'auditeeForm/:projId', component: AuditeeFormComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'ncRegister/:projId', component: NcRegisterFormComponent },
      { path: 'userNcRegister/:projectId', component: UserNcRegisterComponent },
      {path: 'login' , component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
