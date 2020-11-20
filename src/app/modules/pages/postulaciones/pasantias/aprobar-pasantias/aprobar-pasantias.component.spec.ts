import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarPasantiasComponent } from './aprobar-pasantias.component';

describe('AprobarPasantiasComponent', () => {
  let component: AprobarPasantiasComponent;
  let fixture: ComponentFixture<AprobarPasantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarPasantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarPasantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
