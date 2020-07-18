import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from '../../models/Carrera';
import { CarreraserviceService } from '../../services/carreraservice.service';

@Component({
  selector: 'app-list-carreras',
  templateUrl: './list-carreras.component.html',
  styleUrls: ['./list-carreras.component.css']
})
export class ListCarrerasComponent implements OnInit {

  listcarreras = new Array<Carrera>();
  nombreCarrera = "";

  constructor(private ruta: Router, private servicioCarrera: CarreraserviceService) { }

  ngOnInit() {
    this.listar_carreras();
  }

  listar_carreras(){
    this.servicioCarrera.getListadoCarreras().subscribe(
      data =>{
        this.listcarreras=data;
      }
    );
  }
  add_carreras(): void {
    this.ruta.navigate(['/principal/add-carreras']);
  }

}
