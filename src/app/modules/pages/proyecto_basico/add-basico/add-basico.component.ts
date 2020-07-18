import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-basico',
  templateUrl: './add-basico.component.html',
  styleUrls: ['./add-basico.component.css']
})
export class AddBasicoComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }

  volver_lista(): void {
    this.ruta.navigate(['/principal/list-proyecto']);
  }

}
