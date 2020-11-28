import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { JarwisService } from "../../services/jarwis.service";

@Component({
  selector: "app-request-reset",
  templateUrl: "./request-reset.component.html",
  styleUrls: ["./request-reset.component.css"],
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null,
  };

  constructor(private Jarwis: JarwisService) {}

  ngOnInit(): void {}

  onSubmit() {
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      title: "Espere por favor...",
    });
    Swal.showLoading();
    this.Jarwis.sendPasswordResetLink(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(res) {
    Swal.close();
    console.log(res);
    this.form.email = null;
    Swal.fire("Confirmacion!", res.data, "success");
  }
  handleError(res) {
    Swal.close();
    Swal.fire({
      position: "top-right",
      icon: "error",
      title: res.error.error,
      showConfirmButton: false,
      timer: 2500,
    });
  }
}
