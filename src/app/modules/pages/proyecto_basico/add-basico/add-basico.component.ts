import { NullTemplateVisitor } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProyectoMacro } from "../../models/ProyectoMacro";
import { ProyectoBasico } from "../../models/ProyectoBasico";
import { ServiceService } from "../../services/service.service";
import Swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-basico",
  templateUrl: "./add-basico.component.html",
  styleUrls: ["./add-basico.component.css"],
})
export class AddBasicoComponent implements OnInit {
  listmacro = new Array<ProyectoMacro>();
  validarForm: FormGroup;

  macro: ProyectoMacro = {
    idempresa: null,
    idarea: null,
    idcarrera: null,
    nombre_prmacro: null,
    encargado: null,
    ciclo: null,
    horas_pr: null,
    fecha_inicio: null,
    fecha_fin: null,
    estadomacro: null,
  };
  id: any;
  demo = this.macro.id;
  macro_id: number;
  editing: boolean = false;
  macros: ProyectoMacro[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router,
    private formBuilder: FormBuilder
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoAreas().subscribe(
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
    this.listar_macro();
    this.validarForm = this.formBuilder.group({
      id: 0,
      idmacro: [this.id],
      nombre_prbasico: ["", Validators.required],
      actividades: ["", Validators.required],
      estadobasico: ["1", Validators.required],
    });
  }

  onSubmit() {
    this.servicio
      .crearProyectoBasico(this.validarForm.value)
      .subscribe((data) => {
        this.ruta.navigate(["/principal/list-proyecto"]);
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Proyecto Basico registrado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    console.log("empresa");
  }

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-proyecto"]);
  }

  listar_macro() {
    this.servicio.getListadoProyectoMacro().subscribe((data) => {
      this.listmacro = data;
    });
  }
}
