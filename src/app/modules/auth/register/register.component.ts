import { HttpClient } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from '../../pages/models/Carrera';
import { CarreraserviceService } from '../../pages/services/carreraservice.service';
import { JarwisService } from '../services/jarwis.service';
import { TokenService } from '../services/token.service';

declare var $;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  listcarreras = new Array<Carrera>();
  constructor(
    private serviciocarrera:CarreraserviceService, 
    private Jarwis:JarwisService,
    private token:TokenService,
    private ruta:Router) {
  }

  public form={
    cedula:null,
    nombre_completo:null,
    email:null,
    password:null,
    password_confirmation:null,
    idcarrera:null
  }

  public error=<any>[];
  //let bar = <any>{};


  ngOnInit() {
    this.listar_carreras();
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  onSubmit(){
    this.Jarwis.registro(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
      
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.ruta.navigateByUrl('/principal');
  }

  handleError(error){
    this.error=error.error.error;
  }

  listar_carreras(){
    this.serviciocarrera.getListadoCarreras().subscribe(
      data=>{
        this.listcarreras=data
      },(err)=>{
        console.log('Hubo un error en lsta carreras' +err);
      }
    )
  }

}
