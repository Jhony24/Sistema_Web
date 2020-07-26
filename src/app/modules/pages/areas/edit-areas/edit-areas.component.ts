import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Area } from "../../models/Area";
import { Carrera } from "../../models/Carrera";
import { AreaserviceService } from "../../services/areaservice.service";
import { CarreraserviceService } from "../../services/carreraservice.service";

@Component({
  selector: "app-edit-areas",
  templateUrl: "./edit-areas.component.html",
  styleUrls: ["./edit-areas.component.css"],
})
export class EditAreasComponent implements OnInit {
  listcarreras = new Array<Carrera>();

  area: Area = {
    nombrearea: null,
    areaestados: 1,
    idcarrera: null,
    nombrecarreras: null,
  };
  id: any;
  editing: boolean = false;
  areas: Area[];

  constructor(
    private activateRote: ActivatedRoute,
    private serviciocarrera: CarreraserviceService,
    private servicioarea: AreaserviceService,
    private ruta: Router,
    private formBuilder: FormBuilder
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicioarea.getListadoAreas().subscribe(
        (data: Area[]) => {
          this.areas = data;
          this.area = this.areas.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  ngOnInit(): void {
    this.listar_carreras();
  }

  put() {
    this.servicioarea.actualizarArea(this.area).subscribe((data) => {
      this.ruta.navigate(["/principal/list-areas"]);
      Swal.fire("Good ediraste!", "You clicked the button!", "success");
    });
  }

  listar_carreras() {
    this.serviciocarrera.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
      },
      (err) => {}
    );
  }
}
