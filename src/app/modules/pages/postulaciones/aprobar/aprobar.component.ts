import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postulacion } from '../../models/Postulacion';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-aprobar',
  templateUrl: './aprobar.component.html',
  styleUrls: ['./aprobar.component.css']
})
export class AprobarComponent implements OnInit {

  postulacion:Postulacion={
    fecha_postulacion: null,
    cedula: null,
    nombre_completo: null,
    telefono: null,
    ciclo: null,
    email: null,
    fecha_inicio: null,
    hora_entrada: null,
    hora_salida: null,
    salario: null,
    nombrearea: null,
    nombreempresa: null,
    tipo_practica:null,
    nombrecarreras:null,
  }

  id: any;
  editing: boolean = false;
  postulaciones: Postulacion[];

  constructor(private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router) { 
      this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoPostulantes().subscribe(
        (data: Postulacion[]) => {
          this.postulaciones = data;
          this.postulacion = this.postulaciones.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
    }

  ngOnInit(): void {
  }

}
