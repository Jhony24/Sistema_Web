import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../../models/Postulacion';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-proy-rechazados',
  templateUrl: './proy-rechazados.component.html',
  styleUrls: ['./proy-rechazados.component.css']
})
export class ProyRechazadosComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio:ServiceService) { }
  filterPost='';

  ngOnInit(){
    this.listar_postulaciones();
  }

  listar_postulaciones(){
    this.servicio.getListadoPostulantesProyectos().subscribe((data)=>{
      this.listpostulantes=data;
      console.log(this.listpostulantes);
    })
  }
}
