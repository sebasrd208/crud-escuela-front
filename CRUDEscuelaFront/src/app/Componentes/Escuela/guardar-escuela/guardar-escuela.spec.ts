import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarEscuela } from './guardar-escuela';

describe('GuardarEscuela', () => {
  let component: GuardarEscuela;
  let fixture: ComponentFixture<GuardarEscuela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarEscuela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarEscuela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
