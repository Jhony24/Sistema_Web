import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasantiasComponent } from './add-pasantias.component';

describe('AddPasantiasComponent', () => {
  let component: AddPasantiasComponent;
  let fixture: ComponentFixture<AddPasantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPasantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPasantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
