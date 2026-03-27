import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarProfesor } from './guardar-profesor';

describe('GuardarProfesor', () => {
  let component: GuardarProfesor;
  let fixture: ComponentFixture<GuardarProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarProfesor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarProfesor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
