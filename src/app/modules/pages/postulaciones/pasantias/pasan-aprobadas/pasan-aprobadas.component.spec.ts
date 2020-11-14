import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanAprobadasComponent } from './pasan-aprobadas.component';

describe('PasanAprobadasComponent', () => {
  let component: PasanAprobadasComponent;
  let fixture: ComponentFixture<PasanAprobadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasanAprobadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanAprobadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
