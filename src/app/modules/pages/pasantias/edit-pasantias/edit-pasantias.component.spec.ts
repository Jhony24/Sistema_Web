import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPasantiasComponent } from './edit-pasantias.component';

describe('EditPasantiasComponent', () => {
  let component: EditPasantiasComponent;
  let fixture: ComponentFixture<EditPasantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPasantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPasantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
