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
import { QuestionBankComponent } from './_ADMIN_Views/_DATA_Forms/question-bank/question-bank.component';
import { AuditeeFormComponent } from './_ADMIN_Views/auditee-form/auditee-form.component';
import { ProjectsComponent } from './_ADMIN_Views/projects/projects.component';
import { NcRegisterFormComponent } from './_ADMIN_Views/nc-register-form/nc-register-form.component';
import { UserNcRegisterComponent } from './_USER_Views/user-nc-register/user-nc-register.component';
import { LoginComponent } from './_Login_View/login/login.component';
// tslint:disable-next-line:max-line-length
import { CreateDeleteQuestionCategoryComponent } from './_ADMIN_VIEWS/_DATA_Forms/create-delete-question-category/create-delete-question-category.component';
import { ProjectMasterComponent } from './_ADMIN_VIEWS/_DATA_Forms/project-master/project-master.component';
import { appRoutes } from 'app/_Router_Config/RouteConfig';
import { CreateAuditTimeTableComponent } from './_ADMIN_VIEWS/_DATA_Forms/create-audit-time-table/create-audit-time-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionBankComponent,
    AuditeeFormComponent,
    ProjectsComponent,
    NcRegisterFormComponent,
    UserNcRegisterComponent,
    LoginComponent,
    CreateDeleteQuestionCategoryComponent,
    ProjectMasterComponent,
    CreateAuditTimeTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BlockUIModule,
    SnotifyModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
