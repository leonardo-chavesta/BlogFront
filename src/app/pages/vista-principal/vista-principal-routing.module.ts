import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VistaPrincipalComponent } from "./vista-principal.component";

const routes: Routes = [{path:'', component:VistaPrincipalComponent}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VistaPrincipalRoutingModule {}