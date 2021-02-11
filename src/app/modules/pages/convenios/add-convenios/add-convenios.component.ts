import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Carrera } from "../../models/Carrera";
import { Empresa } from "../../models/Empresa";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-add-convenios",
  templateUrl: "./add-convenios.component.html",
  styleUrls: ["./add-convenios.component.css"],
})
export class AddConveniosComponent implements OnInit {
  fecha_c: string = "";
  fff: string = "";
  verSeleccion: string = "";
  lista: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  listaAnos: string[] = ["años", "meses"];
  selectCarrera: string = "";
  selectEmpresa: string = "";
  listcarreras = new Array<Carrera>();
  listempresa = new Array<Empresa>();
  validarForm: FormGroup;
  public error = <any>[];
  public filesToUpload: Array<File>;
  fileToUpload: File = null;
  uploadedFiles: Array<File>;
  private fechaPattern: any = /^([0-9][a-zA-Z ](?=.{2,254}$))$/;
  private regex = /[0-9]\s(?=meses|años)/g;

  private httpHeader = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(
    private ruta: Router,
    private servicio: ServiceService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    console.log(this.fecha_c);
  }

  ngOnInit() {
    this.listar_carreras();
    this.listar_empresas();

    this.validarForm = this.formBuilder.group({
      id: 0,
      tipo_convenio: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
        ],
      ],
      idempresa: [this.selectEmpresa, Validators.required],
      fecha_inicio: ["", Validators.required],
      fecha_culminacion: [
        "",
        [Validators.required, Validators.pattern(this.regex)],
      ],
      objeto: [
        "",
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(100),
        ],
      ],
      idcarrera: [this.selectCarrera, Validators.required],
      estado_convenio: ["1"],
      archivo_convenio: [""],
    });
  }

  onSubmit() {
    console.log("fffff", this.fff);
    if (this.validarForm.valid) {
      this.servicio.crearConvenio(this.validarForm.value).subscribe(
        (data) => {
          this.ruta.navigate(["/principal/list-convenio"]);
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Convenio registrado correctamente",
            showConfirmButton: false,
            timer: 1800,
          });
        },
        (err) => {
          this.handleError(err);
        }
      );
    } else {
      Swal.fire({
        position: "top",
        icon: "info",
        title: "Campos Obligatorios Vacios o Invalidos",
        showConfirmButton: true,
        //timer: 1800,
      });
    }

    /*var formData: any = new FormData();
    formData.append("id",this.validarForm.get('id').value);
    formData.append("tipo_convenio",this.validarForm.get('tipo_convenio').value);
    formData.append("idempresa",this.validarForm.get('idempresa').value);
    formData.append("fecha_inicio",this.validarForm.get('fecha_inicio').value);
    formData.append("fecha_culminacion",this.validarForm.get('fecha_culminacion').value);
    formData.append("objeto",this.validarForm.get('objeto').value);
    formData.append("idcarrera",this.validarForm.get('idcarrera').value);
    formData.append("estado_convenio",this.validarForm.get('estado_convenio').value);
    formData.append("archivo_convenio",this.validarForm.get('archivo_convenio').value);

    this.http.post('http://127.0.0.1:8000/api/convenio', formData,{ headers: {'Content-Type': 'multipart/form-data;'}}).subscribe(
    (response) => console.log("respuesta: ",response),
    (error) => console.log("error de imagen: ",error)
  )*/
  }
  handleError(error) {
    this.error = error.error;
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.validarForm.patchValue({
      archivo_convenio: file,
    });
    this.validarForm.get("archivo_convenio").updateValueAndValidity();
  }
  volver_lista(): void {
    this.validarForm.reset();
    this.ruta.navigate(["/principal/list-convenio"]);
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  listar_carreras() {
    this.servicio.getListadoCarreras().subscribe(
      (data) => {
        this.listcarreras = data;
      },
      (err) => {}
    );
  }
  listar_empresas() {
    this.servicio.getListadoEmpresa().subscribe(
      (data) => {
        this.listempresa = data;
      },
      (err) => {}
    );
  }
  selectChangeHandler(event: any) {
    this.selectCarrera = event.target.value;
    this.selectEmpresa = event.target.value;
  }
  selectChangeCarrera(event: any) {
    this.selectCarrera = event.target.value;
    console.log(this.selectCarrera);
  }
  selectChangeEmpresa(event: any) {
    this.selectEmpresa = event.target.value;
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  get idcarrera() {
    return this.validarForm.get("idcarrera");
  }

  get idempresa() {
    return this.validarForm.get("idempresa");
  }

  get tipo_convenio() {
    return this.validarForm.get("tipo_convenio");
  }
  get fecha_incio() {
    return this.validarForm.get("fecha_inicio");
  }
  get fecha_culminacion() {
    return this.validarForm.get("fecha_culminacion");
  }
  get objeto() {
    return this.validarForm.get("objeto");
  }

  capturar(event: any) {
    this.verSeleccion = event.target.value;
    this.fff = this.verSeleccion + " " + this.fecha_c;
    console.log(this.fff);
  }

  capturar2(event: any) {
    this.fecha_c = event.target.value;
    this.fff = this.verSeleccion + " " + this.fecha_c;
    console.log(this.fff);
  }
}
