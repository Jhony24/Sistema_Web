import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-pasantias",
  templateUrl: "./list-pasantias.component.html",
  styleUrls: ["./list-pasantias.component.css"],
})
export class ListPasantiasComponent implements OnInit {
  constructor(private ruta: Router) {}

  ngOnInit(): void {}
  add_pasantias(): void {
    this.ruta.navigate(["/principal/add-pasantias"]);
  }
}
