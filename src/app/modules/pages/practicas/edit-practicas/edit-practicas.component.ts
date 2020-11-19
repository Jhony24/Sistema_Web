import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Area } from "../../models/Area";
import { Carrera } from "../../models/Carrera";
import { Empresa } from "../../models/Empresa";
import { Practicas } from "../../models/Practicas";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-edit-practicas",
  templateUrl: "./edit-practicas.component.html",
  styleUrls: ["./edit-practicas.component.css"],
})
export class EditPracticasComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  listarea = new Array<Area>();
  listempresa = new Array<Empresa>();
  fechapractica: string = "";
  public validador = true;

  practica: Practicas = {
    tipo_practica: 1,
    cupos: null,
    horas_cumplir: null,
    ciclo: null,
    fecha_inicio: null,
    hora_entrada: null,
    hora_salida: null,
    actividades: null,
    requerimientos: null,
    ppestado: 1,
    idcarrera: null,
    idarea: null,
    idempresa: null,
  };

  id: any;
  editing: boolean = false;
  practicas: Practicas[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoPracticas().subscribe(
        (data: Practicas[]) => {
          this.practicas = data;
          this.practica = this.practicas.find((m) => {
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
    this.listar_empresas();
   console.log(this.validador);
  }

  put(myform: NgForm) {
    if (myform.valid == true && this.validador==true) {
      this.servicio.actualizarPractica(this.practica).subscribe((data) => {
        this.ruta.navigate(["/principal/list-practicas-profesionales"]);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Practica Pre-Profesional actualizada correctamente",
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
  listar_empresas() {
    this.servicio.getListadoEmpresa().subscribe(
      (data) => {
        this.listempresa = data;
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
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-practicas-profesionales"]);
  }

  validarfecha(event: any) {
    this.fechapractica = event.target.value;
    console.log(this.fechapractica);
    var fecha_actual;
    let fechaCorrecta = false;
    var f = new Date();
    var mes = (f.getMonth() + 1).toString();
    if (mes.length <= 1) {
      mes = "0" + mes;
    }
    var dia = f.getDate().toString();
    if (dia.length <= 1) {
      dia = "0" + dia;
    }
    fecha_actual = f.getFullYear() + "-" + mes + "-" + dia;

    console.log(fecha_actual);
    if (this.fechapractica > fecha_actual) {
      fechaCorrecta = true;
    } else if (this.fechapractica == fecha_actual) {
      fechaCorrecta = false;
    } else if (this.fechapractica < fecha_actual) {
      fechaCorrecta = false;
    }

    this.validador = fechaCorrecta;
  }
}
