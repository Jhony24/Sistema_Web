import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-proyecto',
  templateUrl: './list-proyecto.component.html',
  styleUrls: ['./list-proyecto.component.css']
})
export class ListProyectoComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }

  add_macro(): void {
    this.ruta.navigate(['/principal/add-proyecto']);
  }
  add_basico():void{
    this.ruta.navigate(['/principal/add-basico']);
  }
}
