import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracNuevasComponent } from './prac-nuevas.component';

describe('PracNuevasComponent', () => {
  let component: PracNuevasComponent;
  let fixture: ComponentFixture<PracNuevasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracNuevasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracNuevasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
