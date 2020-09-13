import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarComponent } from './aprobar.component';

describe('AprobarComponent', () => {
  let component: AprobarComponent;
  let fixture: ComponentFixture<AprobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
