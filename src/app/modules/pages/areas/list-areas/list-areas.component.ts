import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AreaserviceService } from "../../services/areaservice.service";
import { Area } from "../../models/Area";
import { CarreraserviceService } from "../../services/carreraservice.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-list-areas",
  templateUrl: "./list-areas.component.html",
  styleUrls: ["./list-areas.component.css"],
})
export class ListAreasComponent implements OnInit {
  listareas = new Array<Area>();

  constructor(
    private ruta: Router,
    private servicioCarrera: CarreraserviceService,
    private sericioArea: AreaserviceService
  ) {}

  ngOnInit() {
    this.listar_areas();
  }

  listar_areas() {
    this.sericioArea.getListadoAreas().subscribe((data) => {
      this.listareas = data;
    });
  }

  getCarreraId(id: number) {
    this.servicioCarrera.getListadoCarreras().subscribe((data: []) => {
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
        this.sericioArea.eliminarArea(area.id).subscribe(
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

  editar_area(myoperativo: Area): void {
    localStorage.removeItem('editarOperativoId');
    localStorage.setItem('editarOperativoId', myoperativo.id.toString());
    this.ruta.navigate(["/principal/edit-areas"]);
  }
}
