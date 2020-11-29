import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictFinalizadosComponent } from './fict-finalizados.component';

describe('FictFinalizadosComponent', () => {
  let component: FictFinalizadosComponent;
  let fixture: ComponentFixture<FictFinalizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictFinalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
