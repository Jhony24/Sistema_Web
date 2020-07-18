import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBasicoComponent } from './edit-basico.component';

describe('EditBasicoComponent', () => {
  let component: EditBasicoComponent;
  let fixture: ComponentFixture<EditBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
