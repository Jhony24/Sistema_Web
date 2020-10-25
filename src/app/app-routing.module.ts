import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/auth/login/login.component";
import { RequestResetComponent } from "./modules/auth/password/request-reset/request-reset.component";
import { ResponseResetComponent } from "./modules/auth/password/response-reset/response-reset.component";
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
  {
    path: "request-password-reset",
    component: RequestResetComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path: "response-password-reset",
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
