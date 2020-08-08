import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoMacro } from '../../models/ProyectoMacro';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-list-proyecto',
  templateUrl: './list-proyecto.component.html',
  styleUrls: ['./list-proyecto.component.css']
})
export class ListProyectoComponent implements OnInit {

  listmacro = new Array<ProyectoMacro>();
  listbasico = new Array<ProyectoMacro>();


  constructor(private ruta:Router, private servicio:ServiceService) { }

  ngOnInit(){
    this.listar_macro();
  }

  add_macro(): void {
    this.ruta.navigate(['/principal/add-proyecto']);
  }
  add_basico():void{
    this.ruta.navigate(['/principal/add-basico']);
  }

  listar_macro() {
    this.servicio.getListadoProyectoMacro().subscribe((data) => {
      this.listmacro = data;
    });
  }

  proyectos_basico(macro:ProyectoMacro) {
    this.ruta.navigate(["/principal/add-areas"]);
    this.servicio.getProyectosBasicos(macro.id).subscribe((data) => {
      this.listbasico = data;
      console.log("holaaa",this.listbasico);
    });
  }
}
