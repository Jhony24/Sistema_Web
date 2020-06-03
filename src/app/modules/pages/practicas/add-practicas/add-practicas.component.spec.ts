import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPracticasComponent } from './add-practicas.component';

describe('AddPracticasComponent', () => {
  let component: AddPracticasComponent;
  let fixture: ComponentFixture<AddPracticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPracticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
