import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpresasComponent } from './add-empresas.component';

describe('AddEmpresasComponent', () => {
  let component: AddEmpresasComponent;
  let fixture: ComponentFixture<AddEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
