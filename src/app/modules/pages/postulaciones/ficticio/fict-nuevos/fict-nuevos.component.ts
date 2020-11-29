import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../../models/Postulacion';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-fict-nuevos',
  templateUrl: './fict-nuevos.component.html',
  styleUrls: ['./fict-nuevos.component.css']
})
export class FictNuevosComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio: ServiceService) {}
  filterPost = "";

  ngOnInit() {
    this.listar_postulaciones();
  }

  listar_postulaciones() {
    this.servicio.getListadoPostulantesFicticio().subscribe((data) => {
      this.listpostulantes = data;
    });
  }
}