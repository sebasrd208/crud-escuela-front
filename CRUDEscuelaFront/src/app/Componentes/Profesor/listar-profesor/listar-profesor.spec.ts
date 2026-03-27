import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProfesor } from './listar-profesor';

describe('ListarProfesor', () => {
  let component: ListarProfesor;
  let fixture: ComponentFixture<ListarProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarProfesor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarProfesor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
