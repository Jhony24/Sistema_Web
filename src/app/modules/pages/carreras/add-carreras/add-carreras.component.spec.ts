import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarrerasComponent } from './add-carreras.component';

describe('AddCarrerasComponent', () => {
  let component: AddCarrerasComponent;
  let fixture: ComponentFixture<AddCarrerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarrerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
