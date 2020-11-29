import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarFicticioComponent } from './aprobar-ficticio.component';

describe('AprobarFicticioComponent', () => {
  let component: AprobarFicticioComponent;
  let fixture: ComponentFixture<AprobarFicticioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarFicticioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarFicticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
