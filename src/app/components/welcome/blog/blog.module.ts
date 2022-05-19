import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BlogRoutingModule, routedComponents } from "./blog-routing.module";

@NgModule({
    imports: [BlogRoutingModule, CommonModule, ReactiveFormsModule],
    declarations: [routedComponents],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogModule { }