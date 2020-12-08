import { Time } from "@angular/common";

export class Practicas {
  id?: number;
  tipo_practica: number;
  cupos: number;
  horas_cumplir: number;
  ciclo_necesario: string;
  fecha_inicio: Date;
  fecha_fin?: Date;
  hora_entrada: Time;
  hora_salida: Time;
  actividades?: string;
  tipo_empresa?: string;
  requerimientos?: string;
  salario?: string;
  ppestado: number;
  idcarrera: number;
  modalidad?: string;
  idarea: number;
  idempresa: number;
  nombrearea?: string;
  nombreempresa?: string;
  created_at?: Date;
  updated_at?: Date;
}
