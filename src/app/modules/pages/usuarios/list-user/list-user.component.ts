import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Activate } from '../../models/activar';
import { Users } from '../../models/Users';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listusuarios= new Array<Users>();
  user: Users = {
    cedula: null,
    nombre_completo: null,
    telefono: null,
    genero: null,
    ciclo: null,
    idcarrera: null,
    email: null,
    password: null,
    estadousuario:1,
    nombre_rol: null,
    };
    id: any;
    editing: boolean = false;
    usuario: Users[];

  constructor(private servicio:ServiceService,private activateRote: ActivatedRoute,private ruta:Router) { 
    
  }
 
  ngOnInit(){
    this.lista_usuarios();
  }
  lista_usuarios() {
    this.servicio.getListadoUsuarios().subscribe((data)=>{
      this.listusuarios=data
    });
  }

  
  

  

}
