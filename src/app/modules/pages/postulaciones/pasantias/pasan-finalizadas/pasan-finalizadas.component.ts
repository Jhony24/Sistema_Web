import { Component, OnInit } from '@angular/core';
import { Postulacion } from '../../../models/Postulacion';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-pasan-finalizadas',
  templateUrl: './pasan-finalizadas.component.html',
  styleUrls: ['./pasan-finalizadas.component.css']
})
export class PasanFinalizadasComponent implements OnInit {
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio: ServiceService) {}

  ngOnInit() {
    this.listar_postulaciones();
  }

  listar_postulaciones() {
    this.servicio.getListadoPostulantesPasantias().subscribe((data) => {
      this.listpostulantes = data;
      console.log(this.listpostulantes);
    });
  }
}
