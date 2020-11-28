import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Empresa } from '../../models/Empresa';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-list-empresas",
  templateUrl: "./list-empresas.component.html",
  styleUrls: ["./list-empresas.component.css"],
})
export class ListEmpresasComponent implements OnInit {

  listempresas = new Array<Empresa>();
  constructor(private ruta: Router,private servicio:ServiceService) {}

  ngOnInit(){
    this.listar_empresas();
  }
  listar_empresas() {
    this.servicio.getListadoEmpresa().subscribe((data) => {
      this.listempresas = data;
    });
  }
  add_empresas(): void {
    this.ruta.navigate(["/principal/add-empresas"]);
  }
  eliminar_emresa(empresa: Empresa): void {
    Swal.fire({
      title: "¿Está seguro?",
      text:
        "¿Seguro desea dar de baja al proyecto basico:" +
        empresa.nombreempresa +
        "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Dar de Baja",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarEmpresa(empresa.id).subscribe(
          (data) => {
            this.listar_empresas();
          },
          (err) => {
            console.log(
              "Hubo un error al Eliminar la Empresa => " + err.toString()
            );
          }
        );
        Swal.fire(
          "Dar de Baja!",
          "Se ha dado de baja a la empresa: " + empresa.nombreempresa,
          "success"
        );
      }
    });
  }
}
