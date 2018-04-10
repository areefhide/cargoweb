import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacakDetailComponent } from './lacak-detail.component';

describe('LacakDetailComponent', () => {
  let component: LacakDetailComponent;
  let fixture: ComponentFixture<LacakDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacakDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacakDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
