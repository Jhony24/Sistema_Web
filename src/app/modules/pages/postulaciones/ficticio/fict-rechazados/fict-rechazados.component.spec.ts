import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictRechazadosComponent } from './fict-rechazados.component';

describe('FictRechazadosComponent', () => {
  let component: FictRechazadosComponent;
  let fixture: ComponentFixture<FictRechazadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictRechazadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictRechazadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
