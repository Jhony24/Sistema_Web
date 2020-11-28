import { Component, OnInit } from "@angular/core";
import { Convenio } from "../../models/Convenio";
import { Postulacion } from "../../models/Postulacion";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  listcon = new Array<Convenio>();
  fecha_convenio_fin = "";
  fecha_convenio = "";
  contpasantias = 0;
  contpracticas = 0;
  contproyectos = 0;
  contconvenios = 0;
  contpracticas_pasadas = 0;
  contpasantias_pasadas = 0;
  contparoyectos_pasadas = 0;
  listpostulantes = new Array<Postulacion>();
  constructor(private servicio: ServiceService) {}

  ngOnInit() {
    this.listar_postulacionesPasantias();
    this.listar_postulacionesProyectos();
    this.listar_postulacionesPracticas();
    this.listar_convenios();
    this.listar_practicas();
    this.listar_pasantias();
    this.listar_proyectos();
  }
  listar_postulacionesPasantias() {
    console.log("paso x aqui");
    let pasan: number = 0;
    this.servicio.getListadoPostulantesPasantias().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i]["estado_postulacion"] == "PENDIENTE") {
          this.contpasantias++;
        }
      }
    });
  }
  listar_postulacionesPracticas() {
    let pract: number = 0;
    this.servicio.getListadoPostulantesPracticas().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i]["estado_postulacion"] == "PENDIENTE") {
          this.contpracticas++;
        }
      }
    });
  }
  listar_postulacionesProyectos() {
    let proy: number = 0;
    this.servicio.getListadoPostulantesProyectos().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i]["estado_postulacion"] == "PENDIENTE") {
          this.contproyectos++;
        }
      }
    });
  }

  listar_convenios() {
    this.servicio.getListadoConvenios().subscribe((data) => {
      var fecha_convertida;
      var fecha_actual;
      var fecha_hoy;
      var f = new Date();
      var mes_actual = (f.getMonth() + 1).toString();
      if (mes_actual.length <= 1) {
        mes_actual = "0" + mes_actual;
      }
      var dia_actual = f.getDate().toString();
      if (dia_actual.length <= 1) {
        dia_actual = "0" + dia_actual;
      }
      fecha_hoy = f.getFullYear() + "-" + mes_actual + "-" + dia_actual;
      for (let i = 0; i < data.length; i++) {
        fecha_convertida = new Date(data[i]["fecha_inicio"]);
        var mes = (fecha_convertida.getMonth() + 1).toString();
        if (mes.length <= 1) {
          mes = "0" + mes;
        }
        var dia = (fecha_convertida.getDate() + 1).toString();
        if (dia.length <= 1) {
          dia = "0" + dia;
        }

        var suma;
        suma = Number.parseInt(data[i]["fecha_culminacion"]);
        fecha_actual =
          fecha_convertida.getFullYear() + suma + "-" + mes + "-" + dia;
        if (
          f.getFullYear() >= fecha_convertida.getFullYear() + suma &&
          mes_actual >= mes &&
          dia_actual > dia
        ) {
          this.contconvenios++;
        }
        console.log(fecha_actual, fecha_hoy);
      }
      console.log(this.contconvenios);
    });
  }

  listar_practicas() {
    this.servicio.getListadoPracticas().subscribe((data) => {
      var fecha_convertida;
      var fecha_actual;
      var fecha_hoy;
      var f = new Date();
      var mes_actual = (f.getMonth() + 1).toString();
      if (mes_actual.length <= 1) {
        mes_actual = "0" + mes_actual;
      }
      var dia_actual = f.getDate().toString();
      if (dia_actual.length <= 1) {
        dia_actual = "0" + dia_actual;
      }
      fecha_hoy = f.getFullYear() + "-" + mes_actual + "-" + dia_actual;
      for (let i = 0; i < data.length; i++) {
        fecha_convertida = new Date(data[i]["fecha_inicio"]);
        var mes = (fecha_convertida.getMonth() + 1).toString();
        if (mes.length <= 1) {
          mes = "0" + mes;
        }
        var dia = (fecha_convertida.getDate() + 1).toString();
        if (dia.length <= 1) {
          dia = "0" + dia;
        }

        fecha_actual = fecha_convertida.getFullYear() + "-" + mes + "-" + dia;
        if (
          f.getFullYear() >= fecha_convertida.getFullYear() &&
          mes_actual >= mes &&
          dia_actual > dia
        ) {
          this.contpracticas_pasadas++;
        }
        console.log(fecha_actual, fecha_hoy);
      }
      console.log("practicas", this.contpracticas_pasadas);
    });
  }
  listar_pasantias() {
    this.servicio.getListadoPasantias().subscribe((data) => {
      var fecha_convertida;
      var fecha_actual;
      var fecha_hoy;
      var f = new Date();
      var mes_actual = (f.getMonth() + 1).toString();
      if (mes_actual.length <= 1) {
        mes_actual = "0" + mes_actual;
      }
      var dia_actual = f.getDate().toString();
      if (dia_actual.length <= 1) {
        dia_actual = "0" + dia_actual;
      }
      fecha_hoy = f.getFullYear() + "-" + mes_actual + "-" + dia_actual;
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          fecha_convertida = new Date(data[i]["fecha_inicio"]);
          var mes = (fecha_convertida.getMonth() + 1).toString();
          if (mes.length <= 1) {
            mes = "0" + mes;
          }
          var dia = (fecha_convertida.getDate() + 1).toString();
          if (dia.length <= 1) {
            dia = "0" + dia;
          }

          fecha_actual = fecha_convertida.getFullYear() + "-" + mes + "-" + dia;
          if (
            f.getFullYear() >= fecha_convertida.getFullYear() &&
            mes_actual >= mes &&
            dia_actual > dia
          ) {
            this.contpasantias_pasadas++;
          }
          console.log(fecha_actual, fecha_hoy);
        }
      } else {
        this.contpasantias_pasadas = 0;
      }
      console.log("pasantias", this.contpasantias_pasadas);
    });
  }
  listar_proyectos() {
    this.servicio.getListadoPasantias().subscribe((data) => {
      var fecha_convertida;
      var fecha_actual;
      var fecha_hoy;
      var f = new Date();
      var mes_actual = (f.getMonth() + 1).toString();
      if (mes_actual.length <= 1) {
        mes_actual = "0" + mes_actual;
      }
      var dia_actual = f.getDate().toString();
      if (dia_actual.length <= 1) {
        dia_actual = "0" + dia_actual;
      }
      fecha_hoy = f.getFullYear() + "-" + mes_actual + "-" + dia_actual;
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          fecha_convertida = new Date(data[i]["fecha_inicio"]);
          var mes = (fecha_convertida.getMonth() + 1).toString();
          if (mes.length <= 1) {
            mes = "0" + mes;
          }
          var dia = (fecha_convertida.getDate() + 1).toString();
          if (dia.length <= 1) {
            dia = "0" + dia;
          }

          fecha_actual = fecha_convertida.getFullYear() + "-" + mes + "-" + dia;
          if (
            f.getFullYear() >= fecha_convertida.getFullYear() &&
            mes_actual >= mes &&
            dia_actual > dia
          ) {
            this.contparoyectos_pasadas++;
          }
          console.log(fecha_actual, fecha_hoy);
        }
      } else {
        this.contparoyectos_pasadas = 0;
      }
      console.log("pasantias", this.contpasantias_pasadas);
    });
  }
}
