import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConveniosComponent } from './list-convenios.component';

describe('ListConveniosComponent', () => {
  let component: ListConveniosComponent;
  let fixture: ComponentFixture<ListConveniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConveniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
