import {Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  users: any;
  constructor(private appService: AppService) {
    
  }


  ngOnInit() {
    this.getList();
  }

  getList() {
    this.appService
      .getInfosTags()
      .pipe(
        finalize(() => {
          console.log()
        })
      )
      .subscribe(
        (result:any) => {
          this.users = result;
        },
        (error) => {
          console.log('error:', error);
          return;
        }
      );
  } 
}
