import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpresasComponent } from './edit-empresas.component';

describe('EditEmpresasComponent', () => {
  let component: EditEmpresasComponent;
  let fixture: ComponentFixture<EditEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
