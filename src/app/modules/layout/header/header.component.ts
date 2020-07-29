import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";
import { JarwisService } from "../../auth/services/jarwis.service";
import { TokenService } from "../../auth/services/token.service";
import { Users } from "../../pages/models/Users";
import { ServiceService } from '../../pages/services/service.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public error = null;
  UserProfile: Users;
  role = "";

  constructor(
    private ruta: Router,
    private Token: TokenService,
    private auth: AuthService,
    private servicio: ServiceService
  ) {
    this.servicio.getuser().subscribe((data: any) => {
      this.UserProfile = data;
    });

    this.servicio.getRoles().subscribe((data: any) => {
      this.role = data;
    });
  }

  ngOnInit() {}

  logout() {
    this.Token.remove();
    this.auth.changeAuthStatus(false);
    this.ruta.navigateByUrl("/login");
  }
  handleResponse(data) {
    this.Token.remove();
    this.ruta.navigateByUrl("/login");
  }
  handleError(error) {
    this.error = error.error.error;
  }
}
