import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEscuela } from './editar-escuela';

describe('EditarEscuela', () => {
  let component: EditarEscuela;
  let fixture: ComponentFixture<EditarEscuela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEscuela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEscuela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
