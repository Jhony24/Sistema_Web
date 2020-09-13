import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Users } from "../../models/Users";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-activar-user",
  templateUrl: "./activar-user.component.html",
  styleUrls: ["./activar-user.component.css"],
})
export class ActivarUserComponent implements OnInit {
  user: Users = {
    cedula: null,
    nombre_completo: null,
    email: null,
    telefono: null,
    genero: null,
    ciclo: null,
    idcarrera: null,
    estadousuario: 1,
  };

  id: any;
  editing: boolean = false;
  usuario: Users[];

  constructor(
    private servicio: ServiceService,
    private activateRote: ActivatedRoute,
    private ruta: Router
  ) {
    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getListadoUsuarios().subscribe(
        (data: Users[]) => {
          this.usuario = data;
          this.user = this.usuario.find((m) => {
            return m.id == this.id;
          });
        },
        (error) => {}
      );
    }
  }

  ngOnInit(): void {}

  put() {
    this.servicio.activarusuario(this.user).subscribe((data) => {
      Swal.fire(
        "Usuario Activado!",
        "El usuario se activo satisfactoriamente!",
        "success"
      );
      this.ruta.navigate(["/principal/list-user"]);
    });
  }
  bajar() {
    this.servicio.desactivarusuario(this.user).subscribe((data) => {
      Swal.fire(
        "Usuario Desactivado!",
        "El usuario se activo satisfactoriamente!",
        "success"
      );
      this.ruta.navigate(["/principal/list-user"]);
    });

  }
}
