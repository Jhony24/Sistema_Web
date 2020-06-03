import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-areas',
  templateUrl: './list-areas.component.html',
  styleUrls: ['./list-areas.component.css']
})
export class ListAreasComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  add_cargo(): void {
    this.ruta.navigate(['/principal/add-areas']);
  }

}
