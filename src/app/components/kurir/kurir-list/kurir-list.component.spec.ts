import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurirListComponent } from './kurir-list.component';

describe('KurirListComponent', () => {
  let component: KurirListComponent;
  let fixture: ComponentFixture<KurirListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurirListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
