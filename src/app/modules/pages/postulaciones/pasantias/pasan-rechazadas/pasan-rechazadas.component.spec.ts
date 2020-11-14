import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanRechazadasComponent } from './pasan-rechazadas.component';

describe('PasanRechazadasComponent', () => {
  let component: PasanRechazadasComponent;
  let fixture: ComponentFixture<PasanRechazadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasanRechazadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanRechazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
