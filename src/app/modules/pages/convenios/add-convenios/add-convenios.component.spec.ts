import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConveniosComponent } from './add-convenios.component';

describe('AddConveniosComponent', () => {
  let component: AddConveniosComponent;
  let fixture: ComponentFixture<AddConveniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConveniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
