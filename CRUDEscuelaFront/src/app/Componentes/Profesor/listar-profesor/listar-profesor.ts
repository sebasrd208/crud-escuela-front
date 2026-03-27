import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../../../Servicio/service';
import { Profesor } from '../../../Entidades/profesores';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-profesor',
  imports: [CommonModule,FormsModule],
  templateUrl: './listar-profesor.html',
  styleUrl: './listar-profesor.css',
})
export class ListarProfesor implements OnInit{

  ngOnInit(): void {
    this.listar();   
  }

  constructor(
    private router: Router,
    private service: Service,
  ) {}

  profe: Profesor = new Profesor();
  profesores!:Profesor[];
  profesoresFiltrados!:Profesor[];

  filtro = { nivel: '' };

  listar() {
    this.service.listarProfesor().subscribe({      
      next: (data) => {        
        this.profesores = data;
        this.profesoresFiltrados = [...this.profesores];
      },
      error: (error) => {
        Swal.fire({
          title: 'Oops...',
          text: 'No se pueden cargar las escuelas.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      },      
      complete: () => {
        console.log('La peticion de listar ha finalizado.');
      }
    });
  }

  eliminar(profe: Profesor) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: '¡No podras revertir la eliminacion!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#14f50c',
      confirmButtonText: 'Si, eliminalo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarProfesor(profe.idProfesor).subscribe(() => {
          Swal.fire({
            title: 'Eliminado!',
            text: '¡Tu profesor se ha eliminado!',
            icon: 'success',
          });
          this.listar();
        });
      }
    });
  }

  editar(profe_x: Profesor) {
    Swal.fire({
      title: 'Datos cargados!',
      text: 'Los datos del mueble se cargaron con exito.',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      localStorage.setItem('profe_key', JSON.stringify(profe_x));
      this.router.navigate(['editarP']);
    })
  }

  guardar(){
    this.router.navigate(['guardarP']);
  }

  profesorEncontrado: Profesor = new Profesor();
  buscarPorEspecialidad(especialidad: string) {
    if (especialidad.trim() == '') {
      this.profesorEncontrado.idProfesor = 0;
    } else {
      this.service.buscarPorEspecialidad(especialidad).subscribe((data) => {
        this.profesorEncontrado = data;
      });
    }
  }

  filtrarProfesores() {
    this.profesoresFiltrados = this.profesores.filter(escuela =>
      escuela.especialidad.toLowerCase().includes(this.filtro.nivel.toLowerCase())
    );
  }
}
