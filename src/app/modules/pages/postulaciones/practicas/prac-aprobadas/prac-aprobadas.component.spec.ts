import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracAprobadasComponent } from './prac-aprobadas.component';

describe('PracAprobadasComponent', () => {
  let component: PracAprobadasComponent;
  let fixture: ComponentFixture<PracAprobadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracAprobadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracAprobadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
