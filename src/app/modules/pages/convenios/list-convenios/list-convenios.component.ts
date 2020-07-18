import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-convenios',
  templateUrl: './list-convenios.component.html',
  styleUrls: ['./list-convenios.component.css']
})
export class ListConveniosComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }

  add_empresas(): void {
    this.ruta.navigate(['/principal/add-empresas']);
  }
  add_convenios():void{
    this.ruta.navigate(['/principal/add-convenio']);
  }

}
