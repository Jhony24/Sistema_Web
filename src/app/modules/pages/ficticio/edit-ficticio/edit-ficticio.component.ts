import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Carrera } from "../../models/Carrera";
import { Ficticio } from "../../models/Ficticio";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-edit-ficticio",
  templateUrl: "./edit-ficticio.component.html",
  styleUrls: ["./edit-ficticio.component.css"],
})
export class EditFicticioComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  fechapractica: string = "";
  userCarrera: string = "";
  public validador = true;

  ficticio: Ficticio = {
    idcarrera: null,
    nombrearea: null,
    nombreempresa: null,
    nombre_prficticio: null,
    estudianes_requeridos: null,
    fecha_inicio: null,
    horas_cumplir: null,
    actividades: null,
    requerimientos: null,
    estadoficticio: 1,
  };

  id: any;
  editing: boolean = false;
  ficticios: Ficticio[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.servicio.getusercarrera().subscribe((data: any) => {
      this.userCarrera = data["nombrecarreras"];
    });
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoProyectoFicticio().subscribe(
        (data: Ficticio[]) => {
          this.ficticios = data;
          this.ficticio = this.ficticios.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  ngOnInit() {
    this.listar_carreras();
  }

  put(myform: NgForm) {
    if (myform.valid == true && this.validador == true) {
      this.servicio.actualizarFiciticio(this.ficticio).subscribe((data) => {
        this.ruta.navigate(["/principal/list-proyecto_3ero"]);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Proyecto actualizado correctamente",
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

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-proyecto_3ero"]);
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
