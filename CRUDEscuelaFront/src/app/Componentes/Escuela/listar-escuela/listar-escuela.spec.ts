import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEscuela } from './listar-escuela';

describe('ListarEscuela', () => {
  let component: ListarEscuela;
  let fixture: ComponentFixture<ListarEscuela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEscuela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEscuela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
