import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAreasComponent } from './edit-areas.component';

describe('EditAreasComponent', () => {
  let component: EditAreasComponent;
  let fixture: ComponentFixture<EditAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
