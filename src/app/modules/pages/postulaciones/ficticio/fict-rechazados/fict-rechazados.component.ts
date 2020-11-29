import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../../models/Postulacion';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-fict-rechazados',
  templateUrl: './fict-rechazados.component.html',
  styleUrls: ['./fict-rechazados.component.css']
})
export class FictRechazadosComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio:ServiceService) { }
  filterPost='';

  ngOnInit(){
    this.listar_postulaciones();
  }

  listar_postulaciones(){
    this.servicio.getListadoPostulantesFicticio().subscribe((data)=>{
      this.listpostulantes=data;
      console.log(this.listpostulantes);
    })
  }
}