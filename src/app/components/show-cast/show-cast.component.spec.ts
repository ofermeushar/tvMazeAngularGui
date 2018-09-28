import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCastComponent } from './show-cast.component';

describe('ShowCastComponent', () => {
  let component: ShowCastComponent;
  let fixture: ComponentFixture<ShowCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
