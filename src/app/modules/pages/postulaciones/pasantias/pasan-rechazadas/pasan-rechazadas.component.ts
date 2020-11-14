import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../../models/Postulacion';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-pasan-rechazadas',
  templateUrl: './pasan-rechazadas.component.html',
  styleUrls: ['./pasan-rechazadas.component.css']
})
export class PasanRechazadasComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio:ServiceService) { }
  filterPost='';

  ngOnInit(){
    this.listar_postulaciones();
  }

  listar_postulaciones(){
    this.servicio.getListadoPostulantesPasantias().subscribe((data)=>{
      this.listpostulantes=data;
      console.log(this.listpostulantes);
    })
  }
}
