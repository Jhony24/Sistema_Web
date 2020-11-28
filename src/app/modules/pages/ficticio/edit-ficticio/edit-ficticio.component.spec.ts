import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFicticioComponent } from './edit-ficticio.component';

describe('EditFicticioComponent', () => {
  let component: EditFicticioComponent;
  let fixture: ComponentFixture<EditFicticioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFicticioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFicticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
