import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../../../Servicio/service';
import { Escuela } from '../../../Entidades/escuela';
import { Profesor } from '../../../Entidades/profesores';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-profesor',
  imports: [FormsModule],
  templateUrl: './editar-profesor.html',
  styleUrl: './editar-profesor.css',
})
export class EditarProfesor implements OnInit {

  ngOnInit(): void {
    const profesorModificado = localStorage.getItem('profe_key');
    if (profesorModificado) {
      this.profe = JSON.parse(profesorModificado);
      this.esc.id = this.profe.escuela.id;
    }
  }

  constructor(private router: Router, private service: Service) { }

  profe: Profesor = new Profesor();
  esc: Escuela = new Escuela();

  editar() {
    this.profe.escuela = this.esc;
    this.service.editarProfesor(this.profe).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 201) {
          Swal.fire({
            title: 'Editado!',
            text: 'La escuela se edito con exito!',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
          });
          this.router.navigate(['listarP']);
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Ocurrio un error durante la edicion.',
            icon: 'error',
          });
          console.log("Error al guardar: ", response)
        }
      },
    });
  }

  cancelar() {
    Swal.fire({
      title: 'Cancelado!',
      text: 'Se ha cancelado la modificación...',
      icon: 'warning',
    }).then(() => {
      this.router.navigate(['listarP']);
    });
  }
}
