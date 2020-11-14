import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../../models/Postulacion';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-proy-nuevos',
  templateUrl: './proy-nuevos.component.html',
  styleUrls: ['./proy-nuevos.component.css']
})
export class ProyNuevosComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio:ServiceService) { }
  filterPost='';

  ngOnInit(){
    this.listar_postulaciones();
  }

  listar_postulaciones(){
    this.servicio.getListadoPostulantesProyectos().subscribe((data)=>{
      this.listpostulantes=data;
    })
  }
}
