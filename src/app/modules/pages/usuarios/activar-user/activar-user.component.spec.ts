import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarUserComponent } from './activar-user.component';

describe('ActivarUserComponent', () => {
  let component: ActivarUserComponent;
  let fixture: ComponentFixture<ActivarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
