import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Carrera } from '../../models/Carrera';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-edit-carreras',
  templateUrl: './edit-carreras.component.html',
  styleUrls: ['./edit-carreras.component.css']
})
export class EditCarrerasComponent implements OnInit {
  role="";
  carrera: Carrera = {
    nombrecarreras: null,
    estadocarreras: 1
  };
  id: any;
  editing: boolean = false;
  carreras: Carrera[];

  constructor( private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router) { 
      this.servicio.getRoles().subscribe((data: any) => {
        this.role = data;
      });
      this.id = this.activateRote.snapshot.params["id"];
      if (this.id) {
        this.editing = true;
        this.servicio.getListadoCarrerasAdmin().subscribe(
          (data: Carrera[]) => {
            this.carreras = data;
            this.carrera = this.carreras.find((m) => {
              return m.id == this.id;
            });
          },
          (error) => {}
        );
      }
    }

  ngOnInit(): void {
  }

  put() {
    this.servicio.actualizarCarrera(this.carrera).subscribe((data) => {
      this.ruta.navigate(["/principal/list-carreras"]);
      Swal.fire("Correcto!", "Registro Editado Correctamente", "success");
    });
  }


  volver_lista(): void {
    this.ruta.navigate(["/principal/list-carreras"]);
  }

}
