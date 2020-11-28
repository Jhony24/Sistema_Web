import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFicticioComponent } from './add-ficticio.component';

describe('AddFicticioComponent', () => {
  let component: AddFicticioComponent;
  let fixture: ComponentFixture<AddFicticioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFicticioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFicticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
