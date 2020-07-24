import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/auth/login/login.component";
import { AfterLoginService } from "./modules/auth/services/after-login.service";
import { BeforeLoginService } from "./modules/auth/services/before-login.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    //component:LoginComponent
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
    canActivate: [BeforeLoginService],
  },
  {
    path: "principal",
    loadChildren: () =>
      import("./modules/pages/pages.module").then((m) => m.PagesModule),
    canActivate: [AfterLoginService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
