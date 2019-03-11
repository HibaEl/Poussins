import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmesComponent } from './firmes.component';

describe('FirmesComponent', () => {
  let component: FirmesComponent;
  let fixture: ComponentFixture<FirmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
