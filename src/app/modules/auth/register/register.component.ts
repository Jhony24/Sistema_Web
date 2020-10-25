import { HttpClient } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Carrera } from '../../pages/models/Carrera';
import { ServiceService } from '../../pages/services/service.service';
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
  list= new Array<String>();
  constructor(
    private servicio:ServiceService, 
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
    idcarrera:null,
    estadousuario:0
  }

  public error = <any>[];
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
      err=> {
       this.handleError(err);
      }
    );
    
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    Swal.fire(
      'Usuario Registrado!',
      'Por favor espere su confirmación que su cuenta ha sido activada!',
      'success'
    );
    this.token.remove();
    this.ruta.navigateByUrl('/login');
  }

  handleError(error){
    this.error=error.error;
    console.log("handleerror",this.error);
    }

  listar_carreras(){
    this.servicio.getListadoCarrerasAdmin().subscribe(
      data=>{
        this.listcarreras=data
      },(err)=>{
        this.error=err
        console.log('Hubo un error en lsta carreras' +err);
      }
    )
  }

}
