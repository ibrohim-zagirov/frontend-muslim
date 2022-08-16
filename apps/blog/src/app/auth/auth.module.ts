import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { RegisterComponent } from "./components/register.component";


const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    declarations: [RegisterComponent],
    exports: []
})
export class AuthModule {

}