import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConveniosComponent } from './edit-convenios.component';

describe('EditConveniosComponent', () => {
  let component: EditConveniosComponent;
  let fixture: ComponentFixture<EditConveniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConveniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
