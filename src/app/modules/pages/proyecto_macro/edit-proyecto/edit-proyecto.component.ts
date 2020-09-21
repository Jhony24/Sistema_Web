import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Area } from "../../models/Area";
import { Carrera } from "../../models/Carrera";
import { ProyectoMacro } from "../../models/ProyectoMacro";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-edit-proyecto",
  templateUrl: "./edit-proyecto.component.html",
  styleUrls: ["./edit-proyecto.component.css"],
})
export class EditProyectoComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  listarea = new Array<Area>();

  macro: ProyectoMacro = {
    //idempresa:number;
    idarea: null,
    idcarrera: null,
    nombre_prmacro: null,
    encargado: null,
    estadomacro: 1,
    descripcion: null,
  };

  id: any;
  editing: boolean = false;
  macros: ProyectoMacro[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoProyectoMacro().subscribe(
        (data: ProyectoMacro[]) => {
          this.macros = data;
          this.macro = this.macros.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  ngOnInit() {
    this.listar_carreras();
    this.listar_areas();
  }

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-proyecto"]);
  }

  put(myform: NgForm) {
    if (myform.valid == true) {
      this.servicio.actualizarMacro(this.macro).subscribe((data) => {
        this.ruta.navigate(["/principal/list-proyecto"]);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Proyecto Macro actualizado correctamente",
          showConfirmButton: false,
          timer: 1800,
        });
      });
    } else {
      Swal.fire({
        position: "top",
        icon: "info",
        title: "Campos Obligatorios Vacios o Invalidos",
        showConfirmButton: true,
        //timer: 1800,
      });
    }
  }

  listar_carreras() {
    this.servicio.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
      },
      (err) => {}
    );
  }

  listar_areas() {
    this.servicio.getListadoAreas().subscribe(
      (data) => {
        this.listarea = data;
      },
      (err) => {}
    );
  }
}
