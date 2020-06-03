import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPracticasComponent } from './edit-practicas.component';

describe('EditPracticasComponent', () => {
  let component: EditPracticasComponent;
  let fixture: ComponentFixture<EditPracticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPracticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
