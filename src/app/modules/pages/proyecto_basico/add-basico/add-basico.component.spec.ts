import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBasicoComponent } from './add-basico.component';

describe('AddBasicoComponent', () => {
  let component: AddBasicoComponent;
  let fixture: ComponentFixture<AddBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
