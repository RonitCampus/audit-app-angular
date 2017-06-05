import { Component, OnInit } from '@angular/core';
import { CreateDelQuestionService } from './service/CreateDelQuesion-service';
import { IQuestionCategory } from './model/IQuestionCateory';
@Component({
  selector: 'app-create-delete-question-category',
  templateUrl: './create-delete-question-category.component.html',
  styleUrls: ['./create-delete-question-category.component.css'],
  providers: [CreateDelQuestionService]
})
export class CreateDeleteQuestionCategoryComponent implements OnInit {

  public questionCategoryList: IQuestionCategory[];
  public categoryDesc: string;

  constructor(private _createDelQuestionService: CreateDelQuestionService) { }

  ngOnInit() {
    this.getAllQuestionCategoryList();
  }


  public addCategory() {

    if (this.categoryDesc.trim().length === 0) {
      alert('field caanot be Empty');
      return;
    }

    const questionCategory: IQuestionCategory = { questionCategoryId: 0, questionDescription: this.categoryDesc };
    this._createDelQuestionService.addQuestionCategory(questionCategory)
      .subscribe(
      (data) => {
        console.log(data);
        if (Boolean(data) === true) {
          this.categoryDesc = '';
          this.getAllQuestionCategoryList();
          alert('Category Added Succesfully');
        }
      },
      (err) => { console.log(err); }
      );
  }

  public deleteCategory(id: number) {
    this._createDelQuestionService.deleteCategory(id)
      .subscribe(
      (data) => {
        if (Boolean(data) === true) {
          this.getAllQuestionCategoryList();
          alert('Deleted');
        } else {
          alert('Unable to delete');
        }
      },
      (err) => { console.log(err); }
      );
  }

  private getAllQuestionCategoryList() {
    this._createDelQuestionService.getAllQuestionCategory()
      .subscribe(
      (data) => { this.questionCategoryList = data;},
      (err) => { console.log(err); }
      );
  }

}
