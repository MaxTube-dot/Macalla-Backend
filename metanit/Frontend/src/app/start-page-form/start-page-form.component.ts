import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {DjangoApiServiceService} from "./services/django-api-service.service";

@Component({
  selector: 'app-start-page-form',
  templateUrl: './start-page-form.component.html',
  styleUrls: ['./start-page-form.component.scss']
})
export class StartPageFormComponent {

  constructor(private djangoApi:DjangoApiServiceService) {
  }
  myForm : FormGroup = new FormGroup({
    "searchSite": new FormControl(),
  });


  search(){
    debugger;
    let value  = this.myForm.get('searchSite')?.value;
    this.djangoApi.searchSiteRequest(value).subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
  }
}
