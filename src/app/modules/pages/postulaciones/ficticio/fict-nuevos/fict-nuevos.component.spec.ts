import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictNuevosComponent } from './fict-nuevos.component';

describe('FictNuevosComponent', () => {
  let component: FictNuevosComponent;
  let fixture: ComponentFixture<FictNuevosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictNuevosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
