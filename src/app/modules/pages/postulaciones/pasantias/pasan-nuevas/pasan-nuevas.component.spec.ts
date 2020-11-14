import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasanNuevasComponent } from './pasan-nuevas.component';

describe('PasanNuevasComponent', () => {
  let component: PasanNuevasComponent;
  let fixture: ComponentFixture<PasanNuevasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasanNuevasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasanNuevasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
