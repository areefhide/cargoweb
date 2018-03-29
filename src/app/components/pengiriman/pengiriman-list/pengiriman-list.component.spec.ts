import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengirimanListComponent } from './pengiriman-list.component';

describe('PengirimanListComponent', () => {
  let component: PengirimanListComponent;
  let fixture: ComponentFixture<PengirimanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengirimanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengirimanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
