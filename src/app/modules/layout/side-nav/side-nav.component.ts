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
    this.listar_postulaciones();
    $(document).ready(() => {
      $(".sidebar-menu").tree();
    });
  }
  listar_postulaciones() {
    let c:number=0;
    this.servicio.getListadoPostulantes().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if(data[i]['estado_postulacion'] == "PENDIENTE"){
         this.cont++;
        }
        console.log(this.cont);
      }
      
     
       
          //console.log("hoalallaa",data[i]);
        
      
      //console.log("primero",data[0]['estado_postulacion']);
      //this.listpostulantes = data;
      //console.log("en nav", this.listpostulantes);
    });
  }
}
