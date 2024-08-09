import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserApiComponent } from './form-user-api.component';

describe('FormUserApiComponent', () => {
  let component: FormUserApiComponent;
  let fixture: ComponentFixture<FormUserApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUserApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormUserApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
