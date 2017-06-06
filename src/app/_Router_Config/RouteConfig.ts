import { CreateAuditTimeTableComponent } from './../_ADMIN_VIEWS/_DATA_Forms/create-audit-time-table/create-audit-time-table.component';
import { Routes } from '@angular/router';
import { QuestionBankComponent } from 'app/_ADMIN_Views/_DATA_Forms/question-bank/question-bank.component';
import { AuditeeFormComponent } from 'app/_ADMIN_Views/auditee-form/auditee-form.component';
import { ProjectsComponent } from 'app/_ADMIN_Views/projects/projects.component';
import { NcRegisterFormComponent } from 'app/_ADMIN_Views/nc-register-form/nc-register-form.component';
import { UserNcRegisterComponent } from 'app/_USER_Views/user-nc-register/user-nc-register.component';
import { LoginComponent } from 'app/_Login_View/login/login.component';
// tslint:disable-next-line:max-line-length
import { CreateDeleteQuestionCategoryComponent } from 'app/_ADMIN_VIEWS/_DATA_Forms/create-delete-question-category/create-delete-question-category.component';
import { ProjectMasterComponent } from 'app/_ADMIN_VIEWS/_DATA_Forms/project-master/project-master.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'Admin/add-delete-question-category', pathMatch: 'full' },

    { path: 'login', component: LoginComponent },

    { path: 'Admin/question-bank', component: QuestionBankComponent },
    { path: 'Admin/auditeeForm/:projId', component: AuditeeFormComponent },
    { path: 'Admin/projects', component: ProjectsComponent },
    { path: 'Admin/ncRegister/:projId', component: NcRegisterFormComponent },
    { path: 'Admin/userNcRegister/:projectId', component: UserNcRegisterComponent },
    { path: 'Admin/add-delete-question-category', component: CreateDeleteQuestionCategoryComponent },
    { path: 'Admin/project-master', component: ProjectMasterComponent },
    { path: 'Admin/create-audit-time-table', component: CreateAuditTimeTableComponent}
]
