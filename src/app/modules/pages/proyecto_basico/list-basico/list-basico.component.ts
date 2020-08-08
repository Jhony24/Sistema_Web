import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoBasico } from '../../models/ProyectoBasico';
import { ProyectoMacro } from '../../models/ProyectoMacro';
import { ListProyectoComponent } from '../../proyecto_macro/list-proyecto/list-proyecto.component';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-list-basico',
  templateUrl: './list-basico.component.html',
  styleUrls: ['./list-basico.component.css']
})
export class ListBasicoComponent implements OnInit {



  id: any;
  editing: boolean = false;
  convenios: ProyectoMacro[];
  listbasico = new Array<ProyectoBasico>();


  constructor(
    private activateRote: ActivatedRoute,
    private servicio: ServiceService,
    private ruta: Router
  ) {

    
   }

  ngOnInit(){

    this.id = this.activateRote.snapshot.params["id"];
    if (this.id) {
      this.editing = true;
      this.servicio.getProyectosBasicos(this.id).subscribe(
        (data) => {
          this.listbasico = data;
        },
        (error) => {}
      );
    }
  }

  

}
