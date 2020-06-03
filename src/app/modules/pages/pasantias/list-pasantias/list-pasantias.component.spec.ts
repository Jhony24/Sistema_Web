import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasantiasComponent } from './list-pasantias.component';

describe('ListPasantiasComponent', () => {
  let component: ListPasantiasComponent;
  let fixture: ComponentFixture<ListPasantiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPasantiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPasantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
