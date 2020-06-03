import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-areas',
  templateUrl: './add-areas.component.html',
  styleUrls: ['./add-areas.component.css']
})
export class AddAreasComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  volver_lista(): void {
    this.ruta.navigate(['/principal/list-areas']);
  }

}
