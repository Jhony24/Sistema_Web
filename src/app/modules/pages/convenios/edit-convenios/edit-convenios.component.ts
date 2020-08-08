import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Carrera } from "../../models/Carrera";
import { Convenio } from "../../models/Convenio";
import { Empresa } from "../../models/Empresa";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-edit-convenios",
  templateUrl: "./edit-convenios.component.html",
  styleUrls: ["./edit-convenios.component.css"],
})
export class EditConveniosComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  listempresa = new Array<Empresa>();

  convenio: Convenio = {
    tipo_convenio: null,
    idempresa: null,
    fecha_inicio: null,
    fecha_culminacion: null,
    objeto: null,
    idcarrera: null,
    estado_convenio: 1,
  };
  id: any;
  editing: boolean = false;
  convenios: Convenio[];

  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoConvenios().subscribe(
        (data: Convenio[]) => {
          this.convenios = data;
          this.convenio = this.convenios.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  ngOnInit() {
    this.listar_carreras();
    this.listar_empresas();
  }

  put() {
    this.servicio.actualizarConvenio(this.convenio).subscribe((data) => {
      this.ruta.navigate(["/principal/list-convenio"]);
      Swal.fire("Good ediraste!", "You clicked the button!", "success");
    });
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
}
