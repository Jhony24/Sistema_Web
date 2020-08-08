import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBasicosComponent } from './list-basicos.component';

describe('ListBasicosComponent', () => {
  let component: ListBasicosComponent;
  let fixture: ComponentFixture<ListBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
