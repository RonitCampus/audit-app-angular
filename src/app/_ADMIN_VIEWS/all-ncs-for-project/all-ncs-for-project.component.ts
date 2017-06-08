import { ActivatedRoute } from '@angular/router';
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

  constructor(private _activatedRoute: ActivatedRoute, private _allNcsService: AllNcsinProjectService) { }

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



}
