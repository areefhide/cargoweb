import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacakListComponent } from './lacak-list.component';

describe('LacakListComponent', () => {
  let component: LacakListComponent;
  let fixture: ComponentFixture<LacakListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacakListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacakListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
