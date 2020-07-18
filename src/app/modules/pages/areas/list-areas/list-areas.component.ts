import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaserviceService } from '../../services/areaservice.service';
import { Area } from '../../models/Area';
import { CarreraserviceService } from '../../services/carreraservice.service';

@Component({
  selector: 'app-list-areas',
  templateUrl: './list-areas.component.html',
  styleUrls: ['./list-areas.component.css']
})
export class ListAreasComponent implements OnInit {

  listareas = new Array<Area>();
  nombreArea = "";

  constructor(private ruta: Router,private servicioCarrera:CarreraserviceService, private sericioArea: AreaserviceService) { }

  ngOnInit() {
    this.listar_areas();
  }

  listar_areas(){
    this.sericioArea.getListadoAreas().subscribe(
      data =>{
        this.listareas=data;
      }
    );
  }

  getCarreraId(id:number){
    this.servicioCarrera.getListadoCarreras().subscribe(
      data=>{
        this.listareas=data,
        console.log('lotsao de carreras' + this.listareas);
      }
    )
  }
  add_areas(): void {
    this.ruta.navigate(['/principal/add-areas']);
  }

}
