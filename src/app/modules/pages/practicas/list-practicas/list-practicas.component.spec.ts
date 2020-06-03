import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPracticasComponent } from './list-practicas.component';

describe('ListPracticasComponent', () => {
  let component: ListPracticasComponent;
  let fixture: ComponentFixture<ListPracticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPracticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
