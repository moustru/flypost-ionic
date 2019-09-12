import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

export function NgChildRoutes(routes: Routes) {
  return NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  });
}
