import { Escuela } from "./escuela";

export class Profesor {
  idProfesor!: number;
  nombre!: string;
  edad!: number;
  especialidad!: string;
  escuela!: Escuela;
}