import { Component, OnInit } from "@angular/core";
import { Area } from "../../pages/models/Area";
import { Postulacion } from "../../pages/models/Postulacion";
import { Roles } from "../../pages/models/Roles";
import { Users } from "../../pages/models/Users";
import { ServiceService } from "../../pages/services/service.service";

declare var $;

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"],
})
export class SideNavComponent implements OnInit {
  UserProfile: Users;
  role = "";
  cont=0;
  listpostulantes = new Array<Postulacion>();

  constructor(private servicio: ServiceService) {
    this.servicio.getuser().subscribe((data: any) => {
      this.UserProfile = data;
    });

    this.servicio.getRoles().subscribe((data: any) => {
      this.role = data;
    });
  }

  ngOnInit() {
    this.listar_postulacionesPasantias();
    $(document).ready(() => {
      $(".sidebar-menu").tree();
    });
  }
  listar_postulacionesPasantias() {
    let pasan:number=0;
    this.servicio.getListadoPostulantesPasantias().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if(data[i]['estado_postulacion'] == "PENDIENTE"){
         this.cont++;
        }
      }

    });
  }
  listar_postulacionesPracticas() {
    let pract:number=0;
    this.servicio.getListadoPostulantesPracticas().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if(data[i]['estado_postulacion'] == "PENDIENTE"){
         this.cont++;
        }
      }

    });
  }
  listar_postulacionesProyectos() {
    let proy:number=0;
    this.servicio.getListadoPostulantesProyectos().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if(data[i]['estado_postulacion'] == "PENDIENTE"){
         this.cont++;
        }
      }

    });
  }
}
