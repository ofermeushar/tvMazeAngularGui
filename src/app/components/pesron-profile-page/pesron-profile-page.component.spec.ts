import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesronProfilePageComponent } from './pesron-profile-page.component';

describe('PesronProfilePageComponent', () => {
  let component: PesronProfilePageComponent;
  let fixture: ComponentFixture<PesronProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesronProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesronProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
