import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-empresas",
  templateUrl: "./add-empresas.component.html",
  styleUrls: ["./add-empresas.component.css"],
})
export class AddEmpresasComponent implements OnInit {
  constructor(private ruta: Router) {}

  ngOnInit(): void {}
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-empresas"]);
  }
}
