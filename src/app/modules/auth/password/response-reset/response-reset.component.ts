import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SnotifyService } from 'ng-snotify';
import Swal from 'sweetalert2';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: "app-response-reset",
  templateUrl: "./response-reset.component.html",
  styleUrls: ["./response-reset.component.css"],
})
export class ResponseResetComponent implements OnInit {
  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null,
  };

  public prueba =<any>[];

  constructor(
    private route: ActivatedRoute, 
    private Jarwis: JarwisService,
    private router:Router,
    private notify: SnotifyService) {
    route.queryParams.subscribe((params) => {
      this.form.resetToken = params["token"];
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.Jarwis.changePassword(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    )
  }
  handleResponse(res){
    let _router = this.router;
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: res.data,
      showConfirmButton: false,
      timer: 1800,
    });
    this.router.navigateByUrl('/login');
  }
  handleError(error){
    this.prueba=error.error;
    console.log("handleerror",this.prueba);
  };
  
}
