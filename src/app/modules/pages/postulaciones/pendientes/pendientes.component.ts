import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../models/Postulacion';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  listpostulantes = new Array<Postulacion>();

  constructor(private servicio:ServiceService) { }

  ngOnInit(){
    this.listar_postulaciones();
  }

  listar_postulaciones(){
    this.servicio.getListadoPostulantes().subscribe((data)=>{
      this.listpostulantes=data;
    })
  }
}
