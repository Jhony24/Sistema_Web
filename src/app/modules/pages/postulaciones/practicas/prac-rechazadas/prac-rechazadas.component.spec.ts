import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracRechazadasComponent } from './prac-rechazadas.component';

describe('PracRechazadasComponent', () => {
  let component: PracRechazadasComponent;
  let fixture: ComponentFixture<PracRechazadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracRechazadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracRechazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
