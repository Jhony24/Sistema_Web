import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { Carrera } from '../../models/Carrera';
import { Empresa } from '../../models/Empresa';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-add-convenios",
  templateUrl: "./add-convenios.component.html",
  styleUrls: ["./add-convenios.component.css"],
})
export class AddConveniosComponent implements OnInit {

  selectCarrera: string = "";
  selectEmpresa:string="";
  listcarreras = new Array<Carrera>();
  listempresa = new Array<Empresa>();
  validarForm: FormGroup;


  constructor(private ruta: Router, private servicio:ServiceService,private formBuilder:FormBuilder) {}

  ngOnInit(){
    this.listar_carreras();
    this.listar_empresas();

    this.validarForm = this.formBuilder.group({
      id: 0,
      tipo_convenio:["",Validators.required],
      idempresa:[this.selectEmpresa, Validators.required],
      fecha_inicio:["",Validators.required],
      fecha_culminacion:["",Validators.required],
      objeto:["",Validators.required],
      idcarrera:[this.selectCarrera, Validators.required],
      estado_convenio: ["1",Validators.required],
     
    });
  }

  onSubmit() {
    this.servicio.crearConvenio(this.validarForm.value).subscribe((data) => {
      this.ruta.navigate(["/principal/list-convenio"]);
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Convenio registrado correctamente",
        showConfirmButton: false,
        timer: 1800,
      });
    });
    console.log("convenio");
  }
  volver_lista(): void {
    this.ruta.navigate(["/principal/list-convenio"]);
  }

  listar_carreras() {
    this.servicio.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
      },
      (err) => {}
    );
  }
  listar_empresas() {
    this.servicio.getListadoEmpresa().subscribe(
      (data) => {
        this.listempresa = data;
      },
      (err) => {}
    );
  }
  selectChangeHandler(event: any) {
    this.selectCarrera = event.target.value;
    this.selectEmpresa = event.target.value;

  }
  selectChangeCarrera(event: any) {
    this.selectCarrera = event.target.value;
  }
  selectChangeEmpresa(event : any){
    this.selectEmpresa=event.target.value;
  }
  
  
}
