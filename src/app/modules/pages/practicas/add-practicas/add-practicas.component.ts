import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-practicas',
  templateUrl: './add-practicas.component.html',
  styleUrls: ['./add-practicas.component.css']
})
export class AddPracticasComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }

  volver_lista(): void {
    this.ruta.navigate(['/principal/list-practicas-profesionales']);
  }

}
