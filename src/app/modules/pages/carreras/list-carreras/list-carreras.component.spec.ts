import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarrerasComponent } from './list-carreras.component';

describe('ListCarrerasComponent', () => {
  let component: ListCarrerasComponent;
  let fixture: ComponentFixture<ListCarrerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarrerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
