import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-practicas',
  templateUrl: './list-practicas.component.html',
  styleUrls: ['./list-practicas.component.css']
})
export class ListPracticasComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }

  add_practicas(): void {
    this.ruta.navigate(['/principal/add-practicas-profesionales']);
  }

}
