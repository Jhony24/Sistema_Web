import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFicticioComponent } from './list-ficticio.component';

describe('ListFicticioComponent', () => {
  let component: ListFicticioComponent;
  let fixture: ComponentFixture<ListFicticioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFicticioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFicticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
