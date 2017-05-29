import { Form } from '@angular/forms/forms';
import { SnotifyService } from 'ng-snotify';
import { ICategory } from './models/ICategory';
import { QuestionbankService } from './Services/questionbank-Service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css'],
  providers: [QuestionbankService]
})
export class QuestionBankComponent implements OnInit {

  public categories: ICategory[];
  questionForm: FormGroup;

  constructor(private _questionBankService: QuestionbankService,
    private snotifyService: SnotifyService,
    private _formBuilder: FormBuilder) {
    this.loadCategories();
  }

  ngOnInit() {
    this.questionForm = this._formBuilder.group({
      questionDescription: [],
      activeStatus: [true],
      category: [],
      weightage: []
    });

    console.log(this.questionForm);
  }

  private loadCategories(): void {
    this._questionBankService.getQuestionCategories()
      .subscribe(
      (data) => { this.categories = data },
      (err) => { this.showError(err); }
      );
  }


  public formSubmit(): void {
    console.log('processing');
    console.log(this.questionForm.value);
  }


  public test() {
    const dataobj = {
      'questionDescription': 'Rohan test question',
      'activeStatus': true,
      'category': 101,
      'weightage': 5
    };

    this._questionBankService.addQuestion(dataobj)
      .subscribe(
      (response) => {
        console.log(response);
        if (response.status === 200) {
          this.questionAddedSuccessfully();
        }
      },
      (err) => { this.showError(err); },
    );
  }


  private questionAddedSuccessfully() {
    this.snotifyService.success('Success !', 'Question added to DB.', { timeout: 5000 });
  }

  private showError(err: any) {
    console.error(err);
    this.snotifyService.error('Server Error !', ' Response Sataus : ' + err.status, { timeout: 9000 });
  }
}
