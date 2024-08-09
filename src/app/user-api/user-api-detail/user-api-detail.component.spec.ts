import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApiDetailComponent } from './user-api-detail.component';

describe('UserApiDetailComponent', () => {
  let component: UserApiDetailComponent;
  let fixture: ComponentFixture<UserApiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserApiDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserApiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
