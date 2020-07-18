import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pasantias',
  templateUrl: './add-pasantias.component.html',
  styleUrls: ['./add-pasantias.component.css']
})
export class AddPasantiasComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }

  volver_lista(): void {
    this.ruta.navigate(['/principal/list-pasantias']);
  }

}
