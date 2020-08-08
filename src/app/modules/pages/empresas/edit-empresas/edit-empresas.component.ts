import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Empresa } from '../../models/Empresa';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-edit-empresas',
  templateUrl: './edit-empresas.component.html',
  styleUrls: ['./edit-empresas.component.css']
})
export class EditEmpresasComponent implements OnInit {

  empresa: Empresa = {

    nombreempresa: null,
    tipo_empresa:null,
    nombrerepresentante:null,
    ruc:null,
    direccion:null,
    telefono:null,
    correo:null,
    idcarrera:null,
    actividades:null,
    estadoempresa: 1
  };
  id: any;
  editing: boolean = false;
  empresas: Empresa[];

  constructor(private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router) { 
      this.id = this.activateRote.snapshot.params["id"];
      if (this.id) {
        this.editing = true;
        this.servicio.getListadoEmpresa().subscribe(
          (data: Empresa[]) => {
            this.empresas = data;
            this.empresa = this.empresas.find((m) => {
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
    this.servicio.actualizarEmpresa(this.empresa).subscribe((data) => {
      this.ruta.navigate(["/principal/list-empresas"]);
      Swal.fire("Good ediraste!", "You clicked the button!", "success");
    });
  }

}
