import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AppService } from 'src/app/service/app.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  userDetail: any;
  public userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private formBuilder: FormBuilder,

  ) {
    this.inicializaForm();
   }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.loadUser(id);
    this.userForm.disable();
  }

  inicializaForm() {
    this.userForm = this.formBuilder.group({
      id: null,
      email: null,
      username: null,
      website: null,
      name: null,
      address: this.formBuilder.group({
        street: null,
        city: null,
        zipcode: null
      }),
      company: this.formBuilder.group({
        name: null
      })
    })
  }
  bindForm(result){
    this.userForm.patchValue(result);
  }
  loadUser(id:number){
    this.appService
      .getUserId(id)
      .pipe(
        finalize(() => {
          console.log()
        })
      )
      .subscribe(
        (result:any) => {
          this.bindForm(result);
          console.log(result)
        },
        (error) => {
          console.log('error:', error);
          return;
        }
      );
  } 


}
