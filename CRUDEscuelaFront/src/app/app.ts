import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CRUDEscuela');

  constructor(private router: Router) { }

  listarE() {
    this.router.navigate(['listarE']);
  }

  listarP() {
    this.router.navigate(['listarP']);
  }
}
