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
    "rezult": new FormControl(),
  });


  search(){
    debugger;
    let value  = this.myForm.get('searchSite')?.value;
    this.djangoApi.searchSiteRequest(value).subscribe(X=>{
      this.showResult(X.status);
    })
  }

  showResult(result: any){
  this.myForm.get('rezult')?.setValue(result);
  }
}
