import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }

  volver_lista(): void {
    this.ruta.navigate(['/principal/list-proyecto']);
  }

}
