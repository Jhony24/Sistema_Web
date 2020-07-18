import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-convenios',
  templateUrl: './add-convenios.component.html',
  styleUrls: ['./add-convenios.component.css']
})
export class AddConveniosComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }
  volver_lista(): void {
    this.ruta.navigate(['/principal/list-convenio']);
  }

}
