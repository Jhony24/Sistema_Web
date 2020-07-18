import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBasicoComponent } from './list-basico.component';

describe('ListBasicoComponent', () => {
  let component: ListBasicoComponent;
  let fixture: ComponentFixture<ListBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
