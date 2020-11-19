import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Carrera } from "../../pages/models/Carrera";
import { ServiceService } from "../../pages/services/service.service";
import { JarwisService } from "../services/jarwis.service";
import { TokenService } from "../services/token.service";

declare var $;

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit, OnDestroy {
  listcarreras = new Array<Carrera>();
  list = new Array<String>();
  constructor(
    private servicio: ServiceService,
    private Jarwis: JarwisService,
    private token: TokenService,
    private ruta: Router
  ) {}
  public validador;
  public form = {
    cedula: null,
    nombre_completo: null,
    email: null,
    password: null,
    password_confirmation: null,
    idcarrera: null,
    estadousuario: 0,
  };

  public error = <any>[];
  ngOnInit() {
    this.listar_carreras();
    $("body").addClass("hold-transition login-page");
    $(() => {
      $("input").iCheck({
        checkboxClass: "icheckbox_square-blue",
        radioClass: "iradio_square-blue",
        increaseArea: "20%" /* optional */,
      });
    });
  }

  ngOnDestroy(): void {
    $("body").removeClass("hold-transition login-page");
  }

  onSubmit(myform: NgForm) {
    if (myform.valid == true) {
      if (this.validador == true) {
        Swal.fire({
          allowOutsideClick: false,
          icon: "info",
          title: "Espere por favor...",
        });
        Swal.showLoading();
        this.Jarwis.registro(this.form).subscribe(
          (data) => this.handleResponse(data),
          (err) => {
            this.handleError(err);
          }
        );
      } else {
        Swal.fire({
          position: "top-right",
          icon: "error",
          title: "Cedula Incorrecta",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    } else {
      Swal.fire({
        position: "top",
        icon: "info",
        title: "Campos Obligatorios vacios o invalidos",
        showConfirmButton: true,
        //timer: 1800,
      });
    }
  }

  handleResponse(data) {
    Swal.close();
    if (this.validador == true) {
      this.token.handle(data.access_token);
      Swal.fire(
        "Usuario Registrado!",
        "Por favor espere su confirmación mediante su correo que su cuenta ha sido activada",
        "success"
      );
      this.token.remove();
      this.ruta.navigateByUrl("/login");
    } else {
      console.log("error en cedula");
    }
  }

  handleError(error) {
    Swal.close();
    this.error = error.error;
  }

  listar_carreras() {
    this.servicio.getListadoCarrerasAdmin().subscribe(
      (data) => {
        this.listcarreras = data;
      },
      (err) => {
        Swal.fire({
          position: "top-right",
          icon: "error",
          title: "Ha ocurrido un error",
          showConfirmButton: false,
          timer: 1500,
        });
        this.error = err;
      }
    );
  }

  validadorDeCedula(cedula: String) {
    let cedulaCorrecta = false;
    if (cedula.length == 10) {
      let tercerDigito = parseInt(cedula.substring(2, 3));
      if (tercerDigito < 6) {
        // El ultimo digito se lo considera dígito verificador
        let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verificador = parseInt(cedula.substring(9, 10));
        let suma: number = 0;
        let digito: number = 0;
        for (let i = 0; i < cedula.length - 1; i++) {
          digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
          suma += parseInt((digito % 10) + "") + parseInt(digito / 10 + "");
          //      console.log(suma+" suma"+coefValCedula[i]);
        }
        suma = Math.round(suma);
        //  console.log(verificador);
        //  console.log(suma);
        //  console.log(digito);
        if (
          Math.round(suma % 10) == 0 &&
          Math.round(suma % 10) == verificador
        ) {
          cedulaCorrecta = true;
        } else if (10 - Math.round(suma % 10) == verificador) {
          cedulaCorrecta = true;
        } else {
          cedulaCorrecta = false;
        }
      } else {
        cedulaCorrecta = false;
      }
    } else {
      cedulaCorrecta = false;
    }
    this.validador = cedulaCorrecta;
  }
}
