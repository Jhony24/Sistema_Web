import { HttpClient } from "@angular/common/http";
import { Route } from "@angular/compiler/src/core";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { AuthService } from "../services/auth.service";
import { JarwisService } from "../services/jarwis.service";
import { TokenService } from "../services/token.service";

declare var $;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {
  public form = {
    email: null,
    password: null,
  };

  public prueba = null;

  constructor(
    private Jarwis: JarwisService,
    private token: TokenService,
    private ruta: Router,
    private auth: AuthService
  ) {}

  onSubmit() {
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      title: "Espere por favor...",
    });
    Swal.showLoading();
    this.Jarwis.login(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data) {
    Swal.close();
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.ruta.navigateByUrl("/principal");
  }

  handleError(error) {
    Swal.close();
    this.prueba = error.error.error;
  }
  ngOnInit() {
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
}
