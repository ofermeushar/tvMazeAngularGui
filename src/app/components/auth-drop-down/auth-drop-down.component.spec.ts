import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDropDownComponent } from './auth-drop-down.component';

describe('AuthDropDownComponent', () => {
  let component: AuthDropDownComponent;
  let fixture: ComponentFixture<AuthDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
