import { Routes } from "@angular/router";
import { NgChildRoutes } from "../../shared/decorators/ng-child.routes";

const routes: Routes = []

@NgChildRoutes(routes)
export class OrderRoutingModule {
}
