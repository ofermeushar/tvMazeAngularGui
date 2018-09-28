import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCrewComponent } from './show-crew.component';

describe('ShowCrewComponent', () => {
  let component: ShowCrewComponent;
  let fixture: ComponentFixture<ShowCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
