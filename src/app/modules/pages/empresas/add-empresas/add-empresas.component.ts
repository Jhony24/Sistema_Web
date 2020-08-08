import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { Carrera } from '../../models/Carrera';
import { Empresa } from '../../models/Empresa';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-add-empresas",
  templateUrl: "./add-empresas.component.html",
  styleUrls: ["./add-empresas.component.css"],
})
export class AddEmpresasComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  selectCarrera: string = "";
  validarForm: FormGroup;

  constructor(private ruta: Router, private formBuilder:FormBuilder, private servicio:ServiceService) {}
  ngOnInit(){

    
    this.listar_carreras();
    
    this.validarForm = this.formBuilder.group({
      id: 0,
      nombreempresa: ["",Validators.required],
      tipo_empresa:["",Validators.required],
      nombrerepresentante:["",Validators.required],
      ruc:["",Validators.required],
      direccion:["",Validators.required],
      telefono:["",Validators.required],
      correo:["",Validators.required],
      actividades:["",Validators.required],
      idcarrera: [this.selectCarrera, Validators.required],
      estadoempresa: ["1",Validators.required],
    });
  }

  listar_carreras() {
    this.servicio.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
        console.log(this.listcarreras);
      },
      (err) => {}
    );
  }

  onSubmit() {
    this.servicio.crearEmpresa(this.validarForm.value).subscribe((data) => {
      this.ruta.navigate(["/principal/list-empresas"]);
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Empresa registrada correctamente",
        showConfirmButton: false,
        timer: 1800,
      });
    });
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-empresas"]);
  }

  selectChangeHandler(event: any) {
    this.selectCarrera = event.target.value;
  }

  selectChangeCarrera(event: any) {
    this.selectCarrera = event.target.value;
  }
}
