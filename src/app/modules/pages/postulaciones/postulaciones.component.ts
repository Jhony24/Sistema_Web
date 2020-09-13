import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../models/Postulacion';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-postulaciones',
  templateUrl: './postulaciones.component.html',
  styleUrls: ['./postulaciones.component.css']
})
export class PostulacionesComponent implements OnInit {

  listpostulantes = new Array<Postulacion>();

  constructor(private servicio:ServiceService) { }

  ngOnInit(){
    this.listar_postulaciones();
  }

  listar_postulaciones(){
    this.servicio.getListadoPostulantes().subscribe((data)=>{
      this.listpostulantes=data;
      console.log(this.listpostulantes);
    })
  }

}
