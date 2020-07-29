import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Area } from "../../models/Area";
import Swal from 'sweetalert2';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-list-areas",
  templateUrl: "./list-areas.component.html",
  styleUrls: ["./list-areas.component.css"],
})
export class ListAreasComponent implements OnInit {
  listareas = new Array<Area>();

  constructor(
    private ruta: Router,
    private servicio: ServiceService
  ) {}

  ngOnInit() {
    this.listar_areas();
  }

  listar_areas() {
    this.servicio.getListadoAreas().subscribe((data) => {
      this.listareas = data;
    });
  }

  getCarreraId(id: number) {
    this.servicio.getListadoCarreras().subscribe((data: []) => {
      this.listareas = data;
    });
  }
  add_areas(): void {
    this.ruta.navigate(["/principal/add-areas"]);
  }

  eliminar_area(area:Area):void{
    Swal.fire({
      title: '¿Está seguro?',
      text: "¿Seguro desea eliminar el area:" + area.nombrearea +"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarArea(area.id).subscribe(
          data=>{
            this.listar_areas();
          },(err)=>{
            console.log('Hubo un error al Eliminar el Cargo => '+ err.toString());
          }
        );
        Swal.fire(
          'Eliminado!',
          'Se ha eliminado el Area: '+area.nombrearea,
          'success'
        )
      }
    });

  }

}
