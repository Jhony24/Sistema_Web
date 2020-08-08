import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { Area } from '../../models/Area';
import { Carrera } from '../../models/Carrera';
import { Empresa } from '../../models/Empresa';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: "app-add-pasantias",
  templateUrl: "./add-pasantias.component.html",
  styleUrls: ["./add-pasantias.component.css"],
})
export class AddPasantiasComponent implements OnInit {
  listcarreras = new Array<Carrera>();
  listarea=new Array<Area>();
  listempresa=new Array<Empresa>();
  selectCarrera: string = "";
  selectArea: string = "";
  selectEmpresa: string = "";
  validarForm: FormGroup;
  constructor(private ruta: Router, private formBuilder:FormBuilder, private servicio:ServiceService) {}

  ngOnInit() {
    this.listar_carreras();
    this.listar_areas();
    this.listar_empresas();

    this.validarForm = this.formBuilder.group({
      id: 0,
    tipo_practica:["2",Validators.required],
    cupos:["",Validators.required],
    horas_cumplir:["",Validators.required],
    ciclo:["",Validators.required],
    fecha_inicio:["",Validators.required],
    //fecha_fin:["",Validators.required],
    hora_entrada:["",Validators.required],
    hora_salida:["",Validators.required],
    ppestado:["1",Validators.required],
    salario:["",Validators.required],
    idcarrera:[this.selectCarrera, Validators.required],
    idarea:[this.selectArea, Validators.required],
    idempresa:[this.selectEmpresa, Validators.required],
      
    });
  }

  onSubmit() {
    this.servicio.crearPractica(this.validarForm.value).subscribe((data) => {
      this.ruta.navigate(["/principal/list-pasantias"]);
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Pasantia registrada correctamente",
        showConfirmButton: false,
        timer: 1800,
      });
    });
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
  listar_areas(){
    this.servicio.getListadoAreas().subscribe(
      (data)=>{
        this.listarea=data
      },
      (err)=>{}
    );
  }

  volver_lista(): void {
    this.ruta.navigate(["/principal/list-pasantias"]);
  }

  selectChangeHandler(event: any) {
    this.selectCarrera = event.target.value;
    this.selectArea = event.target.value;
    this.selectEmpresa = event.target.value;
  }

  selectChangeCarrera(event: any) {
    this.selectCarrera = event.target.value;
  }
  selectChangeArea(event: any) {
    this.selectArea = event.target.value;
  }
  selectChangeEmpresa(event: any) {
    this.selectEmpresa = event.target.value;
  }
}
