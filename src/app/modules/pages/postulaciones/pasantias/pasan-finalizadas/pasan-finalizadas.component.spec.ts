import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanFinalizadasComponent } from './pasan-finalizadas.component';

describe('PasanFinalizadasComponent', () => {
  let component: PasanFinalizadasComponent;
  let fixture: ComponentFixture<PasanFinalizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasanFinalizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
