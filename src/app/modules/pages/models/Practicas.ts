import { Time } from '@angular/common';

export class Practicas {
    id?: number;
    tipo_practica:number;
    cupos:number;
    horas_cumplir:number;
    ciclo:number;
    fecha_inicio:Date;
    fecha_fin?:Date;
    hora_entrada:Time;
    hora_salida:Time;
    actividades?:string;
    tipo_empresa?:string;
    requerimientos?:string;
    salario?:number;
    ppestado:number;
    idcarrera:number;
    idarea:number;
    idempresa:number;
    nombrearea?:string;
    nombreempresa?:string;
    created_at?: Date;
    updated_at?: Date;
  }