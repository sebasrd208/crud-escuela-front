import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Escuela } from '../Entidades/escuela';
import { Observable } from 'rxjs';
import { Profesor } from '../Entidades/profesores';

@Injectable({
  providedIn: 'root',
})
export class Service {
  
  constructor(private http: HttpClient) { }

  url = 'http://localhost:8060/';

  listarEscuela() {
    return this.http.get<Escuela[]>(this.url + 'escuela/listar');
  }

  buscarEscuela(id: number) {
    return this.http.get<Escuela>(this.url + 'escuela/buscar/' + id);
  }

  guardarEscuela(escuela: Escuela): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.url + 'escuela/guardar', escuela, {      
      observe: 'response',
      responseType: 'text' as 'json',
    });
  }

  editarEscuela(escuela: Escuela): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.url + 'escuela/editar', escuela, {
      observe: 'response',
      responseType: 'text' as 'json',
    });
  }

  eliminarEscuela(id: number): Observable<HttpResponse<String>> {
    return this.http.delete<String>(this.url + 'escuela/eliminar/' + id, {
      observe: 'response',
      responseType: 'text' as 'json',
    });
  }

  buscarPorNivel(nivel: string) {
    return this.http.get<Escuela>(this.url + 'escuela/buscar-nivel/' + nivel);
  }

  //----------------------------PROFESOR--------------------------------

  listarProfesor() {
    return this.http.get<Profesor[]>(this.url + 'profesor/listar');
  }

  buscarProfesor(id: number) {
    return this.http.get<Profesor>(this.url + 'profesor/buscar/' + id);
  }

  guardarProfesor(profesor: Profesor): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.url + 'profesor/guardar', profesor, {      
      observe: 'response',
      responseType: 'text' as 'json',
    });
  }

  editarProfesor(profesor: Profesor): Observable<HttpResponse<any>> {
    return this.http.put<any>(this.url + 'profesor/editar', profesor, {
      observe: 'response',
      responseType: 'text' as 'json',
    });
  }

  eliminarProfesor(id: number): Observable<HttpResponse<String>> {
    return this.http.delete<String>(this.url + 'profesor/eliminar/' + id, {
      observe: 'response',
      responseType: 'text' as 'json',
    });
  }

  buscarPorEspecialidad(especialidad: string) {
    return this.http.get<Profesor>(this.url + 'profesor/buscar-especialidad/' + especialidad);
  }
  
}
