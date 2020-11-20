import { Time } from "@angular/common";

export class Postulacion {
  id?: number;
  id_estudiante?: number;
  id_practica?: number;
  id_proyecto?: number;
  estado_postulacion?: string;
  fecha_postulacion?: Date;
  created_at?: Date;
  updated_at?: Date;
  cedula?: string;
  nombre_completo: string;
  nombre_prbasico?:string;
  nombre_prmacro?:string;
  telefono: string;
  genero?: string;
  ciclo: string;
  email: string;
  ciclo_necesario?:string;
  observacion?:string;
  tipo_practica:number;
  fecha_inicio: Date;
  hora_entrada: Time;
  hora_salida: Time;
  salario?: string;
  nombrearea: string;
  nombreempresa: string;
  nombrecarreras?:string;
}
