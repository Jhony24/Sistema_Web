import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { Practicas } from '../../models/Practicas';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-list-practicas",
  templateUrl: "./list-practicas.component.html",
  styleUrls: ["./list-practicas.component.css"],
})
export class ListPracticasComponent implements OnInit {

  listpracticas = new Array<Practicas>();
  constructor(private ruta: Router, private servicio:ServiceService) {}

  ngOnInit(){
    this.listar_practicas();
  }

  listar_practicas() {
    this.servicio.getListadoPracticas().subscribe((data) => {
      this.listpracticas = data;
    });
  }

  add_practicas(): void {
    this.ruta.navigate(["/principal/add-practicas-profesionales"]);
  }

  eliminar_practica(practica:Practicas):void{
    Swal.fire({
      title: '¿Está seguro?',
      text: "¿Seguro desea dar de baja a la practica:" + practica.nombrearea +"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Dar de Baja',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarPractica(practica.id).subscribe(
          data=>{
            this.listar_practicas();
          },(err)=>{
            console.log('Hubo un error al Eliminar el Cargo => '+ err.toString());
          }
        );
        Swal.fire(
          'Dar de Baja!',
          'Se ha dado de baja a la practica: '+practica.nombrearea,
          'success'
        )
      }
    });

  }
}
