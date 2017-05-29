import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { SnotifyModule, SnotifyService } from 'ng-snotify'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionBankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SnotifyModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/question-bank', pathMatch: 'full' },
      { path: 'question-bank', component: QuestionBankComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
