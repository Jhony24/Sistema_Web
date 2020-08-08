import { Time } from '@angular/common';

export class ProyectoMacro {
    id?: number;
    idempresa:number;
    idarea:number;
    idcarrera:number;
    nombre_prmacro:string;
    encargado:string;
    ciclo:number;
    horas_pr:Time;
    fecha_inicio:Date;
    fecha_fin:Date;
    estadomacro:number;
    nombrearea?:string;
    nombreempresa?:string;
    created_at?: Date;
    updated_at?: Date;
  }