import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../../../Servicio/service';
import { Escuela } from '../../../Entidades/escuela';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-escuela',
  imports: [CommonModule,FormsModule],
  templateUrl: './listar-escuela.html',
  styleUrl: './listar-escuela.css',
})
export class ListarEscuela implements OnInit{

  ngOnInit(): void {
    this.listar();   
  }

  constructor(
    private router: Router,
    private service: Service,
  ) {}

  esc: Escuela = new Escuela();
  escuelas!:Escuela[];
  escuelasFiltradas!:Escuela[];

  filtro = { nivel: '' };

  listar() {
    this.service.listarEscuela().subscribe({      
      next: (data) => {        
        this.escuelas = data;
        this.escuelasFiltradas = [...this.escuelas];        
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

  eliminar(escuela: Escuela) {
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
        this.service.eliminarEscuela(escuela.id).subscribe(() => {
          Swal.fire({
            title: 'Eliminado!',
            text: '¡Tu escuela se ha eliminado!',
            icon: 'success',
          });
          this.listar();
        });
      }
    });
  }

  editar(escuela_x: Escuela) {
    Swal.fire({
      title: 'Datos cargados!',
      text: 'Los datos del mueble se cargaron con exito.',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      localStorage.setItem('escuela_key', JSON.stringify(escuela_x));
      this.router.navigate(['editarE']);
    })
  }

  guardar(){
    this.router.navigate(['guardarE']);
  }

  escuelaEncontrado: Escuela = new Escuela();
  buscarPorNivel(nivel: string) {
    if (nivel.trim() == '') {
      this.escuelaEncontrado.id = 0;
    } else {
      this.service.buscarPorNivel(nivel).subscribe((data) => {
        this.escuelaEncontrado = data;
      });
    }
  }

  filtrarEscuelas() {
    this.escuelasFiltradas = this.escuelas.filter(escuela =>
      escuela.nivel.toLowerCase().includes(this.filtro.nivel.toLowerCase())
    );
  }

}
