import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Empresa } from '../../models/Empresa';
import { ProyectoBasico } from '../../models/ProyectoBasico';
import { ProyectoMacro } from '../../models/ProyectoMacro';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-edit-basico',
  templateUrl: './edit-basico.component.html',
  styleUrls: ['./edit-basico.component.css']
})
export class EditBasicoComponent implements OnInit {

  listmacro = new Array<ProyectoMacro>();
  listempresa=new Array<Empresa>();

  basico: ProyectoBasico = {
    idmacro:null,
    idempresa:null,
    nombre_prbasico:null,
    estudianes_requeridos:null,
    ciclo:null,
    horas_cumplir:null,
    fecha_inicio:null,
    fecha_fin:null,
    actividades:null,
    requerimientos:null,
    estadobasico:1,
  };

  id: any;
  editing: boolean = false;
  basicos: ProyectoBasico[];

  constructor(private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router) { 
      this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getba2().subscribe(
        (data: ProyectoBasico[]) => {
          this.basicos = data;
          this.basico = this.basicos.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
    }

  ngOnInit() {
    this.listar_macro();
    this.listar_empresas();
  }

  put(){
    this.servicio.actualizarBasico(this.basico).subscribe((data) => {
      this.ruta.navigate(["/principal/list-basico/",this.basico.idmacro]);
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Proyecto Basico actualizado correctamente",
        showConfirmButton: false,
        timer: 1800,
      });
    });
  }
  listar_macro() {
    this.servicio.getListadoProyectoMacro().subscribe((data) => {
      this.listmacro = data;
    });
  }
  listar_empresas() {
    this.servicio.getListadoEmpresa().subscribe(
      (data) => {
        this.listempresa = data;
      },
      (err) => {}
    );
  }

}
