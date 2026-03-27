import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../../../Servicio/service';
import { Profesor } from '../../../Entidades/profesores';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Escuela } from '../../../Entidades/escuela';

@Component({
  selector: 'app-guardar-profesor',
  imports: [FormsModule],
  templateUrl: './guardar-profesor.html',
  styleUrl: './guardar-profesor.css',
})
export class GuardarProfesor {

  constructor(private router: Router, private service: Service) {}

  profe: Profesor = new Profesor();
  escuela:Escuela = new Escuela();

  guardar() {
    this.profe.escuela = this.escuela;
    this.service.guardarProfesor(this.profe).subscribe({
      next: (response: HttpResponse<any>) => {        
        Swal.fire({
          icon: 'success',
          title: '¡Guardado!',
          text: 'El profesor se ha guardado correctamente',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(['listarP']);
        });
      },
      error: (error) => {
        if (error.status === 409) {
          Swal.fire({
            title: 'Error!',
            text: JSON.stringify(error.error),
            icon: 'error',
            showConfirmButton: false,
            timer: 3000
          });
        }
      }, complete: () => {
        console.log("Peticion guardado completado");
      }
    });
  }

  cancelar() {
    Swal.fire({
      title: 'Cancelado!',
      text: 'Se ha cancelado el registro...',
      icon: 'warning',
    }).then(() => {
      this.router.navigate(['listarP']);
    });
  }


}
