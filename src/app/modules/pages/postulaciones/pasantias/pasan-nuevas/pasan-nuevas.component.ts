import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../../models/Postulacion';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-pasan-nuevas',
  templateUrl: './pasan-nuevas.component.html',
  styleUrls: ['./pasan-nuevas.component.css']
})
export class PasanNuevasComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio: ServiceService) {}
  filterPost = "";

  ngOnInit() {
    this.listar_postulaciones();
  }

  listar_postulaciones() {
    this.servicio.getListadoPostulantesPasantias().subscribe((data) => {
      this.listpostulantes = data;
    });
  }
}
