import { Component, OnInit } from "@angular/core";
import { Area } from "../../pages/models/Area";
import { Roles } from "../../pages/models/Roles";
import { Users } from "../../pages/models/Users";
import { ServiceService } from '../../pages/services/service.service';

declare var $;

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"],
})
export class SideNavComponent implements OnInit {
  UserProfile: Users;
  role = "";

  constructor(private servicio: ServiceService) {
    this.servicio.getuser().subscribe((data: any) => {
      this.UserProfile = data;
    });

    this.servicio.getRoles().subscribe((data: any) => {
      this.role = data;
    });
  }

  ngOnInit() {
    $(document).ready(() => {
      $(".sidebar-menu").tree();
    });
  }
}
