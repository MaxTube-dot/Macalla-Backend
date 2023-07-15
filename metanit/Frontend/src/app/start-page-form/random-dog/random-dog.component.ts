import {Component, OnInit} from '@angular/core';
import {DjangoApiServiceService} from "../services/django-api-service.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.scss']
})
export class RandomDogComponent implements OnInit{

  constructor(private djangoApi:DjangoApiServiceService) {
  }
  myForm : FormGroup = new FormGroup({
    "dog": new FormControl(),
  });

  NotDog(){
    this.djangoApi.GetNewDog().subscribe(X=>{
      this.showResult(X.dogurl);
    })
  }
  showResult(result: any){
    this.myForm.get('dog')?.setValue(result);
  }

  ngOnInit(): void {
    setTimeout((x) => this.NotDog(), 30000)
  }
}
