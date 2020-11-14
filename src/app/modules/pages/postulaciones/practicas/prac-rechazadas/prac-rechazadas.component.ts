import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../../models/Postulacion';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-prac-rechazadas',
  templateUrl: './prac-rechazadas.component.html',
  styleUrls: ['./prac-rechazadas.component.css']
})
export class PracRechazadasComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio:ServiceService) { }
  filterPost='';

  ngOnInit(){
    this.listar_postulaciones();
  }

  listar_postulaciones(){
    this.servicio.getListadoPostulantesPracticas().subscribe((data)=>{
      this.listpostulantes=data;
      console.log(this.listpostulantes);
    })
  }
}
