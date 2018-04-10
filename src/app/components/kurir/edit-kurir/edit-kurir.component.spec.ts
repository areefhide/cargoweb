import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKurirComponent } from './edit-kurir.component';

describe('EditKurirComponent', () => {
  let component: EditKurirComponent;
  let fixture: ComponentFixture<EditKurirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKurirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKurirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
