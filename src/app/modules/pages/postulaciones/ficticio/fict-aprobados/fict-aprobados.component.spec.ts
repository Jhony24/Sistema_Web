import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictAprobadosComponent } from './fict-aprobados.component';

describe('FictAprobadosComponent', () => {
  let component: FictAprobadosComponent;
  let fixture: ComponentFixture<FictAprobadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictAprobadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictAprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
