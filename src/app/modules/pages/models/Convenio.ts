export class Convenio {
    id?: number;
    tipo_convenio:string;
    idempresa:number;
    fecha_inicio:Date;
    fecha_culminacion:string;
    objeto:string;
    idcarrera:number;
    estado_convenio: number;
    archivo_convenio?:string;
    nombreempresa?:string;
    created_at?: Date;
    updated_at?: Date;
  }