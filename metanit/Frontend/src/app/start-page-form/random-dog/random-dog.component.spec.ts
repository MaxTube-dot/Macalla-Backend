import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDogComponent } from './random-dog.component';

describe('RandomDogComponent', () => {
  let component: RandomDogComponent;
  let fixture: ComponentFixture<RandomDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomDogComponent]
    });
    fixture = TestBed.createComponent(RandomDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
