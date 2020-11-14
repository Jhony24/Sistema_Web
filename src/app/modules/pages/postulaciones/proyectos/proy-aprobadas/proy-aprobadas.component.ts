import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../../models/Postulacion';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-proy-aprobadas',
  templateUrl: './proy-aprobadas.component.html',
  styleUrls: ['./proy-aprobadas.component.css']
})
export class ProyAprobadasComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio: ServiceService) {}

  ngOnInit() {
    this.listar_postulaciones();
  }

  listar_postulaciones() {
    this.servicio.getListadoPostulantesProyectos().subscribe((data) => {
      this.listpostulantes = data;
      console.log(this.listpostulantes);
    });
  }
}
