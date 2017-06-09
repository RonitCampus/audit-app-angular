import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AllNcsinProjectService } from './service/allNcs-service';

@Component({
  selector: 'app-all-ncs-for-project',
  templateUrl: './all-ncs-for-project.component.html',
  styleUrls: ['./all-ncs-for-project.component.css'],
  providers: [AllNcsinProjectService]
})
export class AllNcsForProjectComponent implements OnInit {

  public allNcs: Object;
  public projectId: number;

  constructor(private _activatedRoute: ActivatedRoute, private route: Router, private _allNcsService: AllNcsinProjectService) { }

  ngOnInit() {
    this.projectId = this._activatedRoute.snapshot.params['projId'];
    this.fetchAllNcs();
  }

  private fetchAllNcs() {
    this._allNcsService.getNcsForProject(this.projectId)
      .subscribe(
      (data) => {
        this.allNcs = data;
        console.log(data);
      },
      (err) => {
        alert(err);
      }
      );
  }

  public getStatus(status: number): string {
    if (Number(status) === 301) {
      return 'Pending with Auditee';
    } else if (Number(status) === 302) {
      return 'Can be closed';
    } else {
      return 'Closed';
    }
  }

  public onReviewNcClick(ncId: number) {
    this.route.navigate(['Admin/review-nc', ncId]);
  }

}
