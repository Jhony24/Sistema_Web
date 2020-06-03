import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesComponent } from './postulaciones.component';

describe('PostulacionesComponent', () => {
  let component: PostulacionesComponent;
  let fixture: ComponentFixture<PostulacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
