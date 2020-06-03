import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAreasComponent } from './list-areas.component';

describe('ListAreasComponent', () => {
  let component: ListAreasComponent;
  let fixture: ComponentFixture<ListAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
