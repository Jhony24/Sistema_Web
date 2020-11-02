import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobadasComponent } from './aprobadas.component';

describe('AprobadasComponent', () => {
  let component: AprobadasComponent;
  let fixture: ComponentFixture<AprobadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
