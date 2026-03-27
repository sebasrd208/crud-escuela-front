import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../../../Servicio/service';
import { Escuela } from '../../../Entidades/escuela';
import Swal from 'sweetalert2';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-escuela',
  imports: [FormsModule],
  templateUrl: './editar-escuela.html',
  styleUrl: './editar-escuela.css',
})
export class EditarEscuela implements OnInit {

  constructor(private router: Router, private service: Service) { }

  esc: Escuela = new Escuela();

  ngOnInit(): void {
    const escuelaModificado = localStorage.getItem('escuela_key');
    if (escuelaModificado) {
      this.esc = JSON.parse(escuelaModificado);
    }
  }

  editar() {
    this.service.editarEscuela(this.esc).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 201) {
          Swal.fire({
            title: 'Editado!',
            text: 'La escuela se edito con exito!',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
          });
          this.router.navigate(['listarE']);
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
      this.router.navigate(['listarE']);
    });
  }

}
