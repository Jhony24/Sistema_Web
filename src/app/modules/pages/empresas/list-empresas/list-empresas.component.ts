import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-empresas",
  templateUrl: "./list-empresas.component.html",
  styleUrls: ["./list-empresas.component.css"],
})
export class ListEmpresasComponent implements OnInit {
  constructor(private ruta: Router) {}

  ngOnInit(): void {}
  add_empresas(): void {
    this.ruta.navigate(["/principal/add-empresas"]);
  }
}
