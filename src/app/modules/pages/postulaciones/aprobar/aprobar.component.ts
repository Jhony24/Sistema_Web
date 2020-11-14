import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
      this.servicio.getListadoPostulantesPracticas().subscribe(
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
  put() {

    Swal.fire({
      title: '¿Está seguro?',
      text: "¿Seguro desea aprobar la postulacion a:" + this.postulacion.nombre_completo +"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Aprobar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.servicio.aprobarpsotulacion(this.postulacion).subscribe((data) => {
          Swal.fire(
            "Postulacion Aprobada!",
            "La postulacion ha sidos aprobada satisfactoriamente!",
            "success"
          );
        });
      }
    });
  }
  rechazar() {
    this.servicio.rechazarpsotulacion(this.postulacion).subscribe((data) => {
      Swal.fire(
        "Postulacion Rechazada!",
        "La postulacion ha sidos rechazada satisfactoriamente!",
        "success"
      );
    });
  }
}
