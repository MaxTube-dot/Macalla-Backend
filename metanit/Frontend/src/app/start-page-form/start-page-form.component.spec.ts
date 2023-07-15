import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageFormComponent } from './start-page-form.component';

describe('StartPageFormComponent', () => {
  let component: StartPageFormComponent;
  let fixture: ComponentFixture<StartPageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartPageFormComponent]
    });
    fixture = TestBed.createComponent(StartPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
