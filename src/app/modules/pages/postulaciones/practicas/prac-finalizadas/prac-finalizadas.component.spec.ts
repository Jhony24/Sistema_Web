import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracFinalizadasComponent } from './prac-finalizadas.component';

describe('PracFinalizadasComponent', () => {
  let component: PracFinalizadasComponent;
  let fixture: ComponentFixture<PracFinalizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracFinalizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
