import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddBlogComponent } from "./add-blog/add-blog.component";
import { ListBlogComponent } from "./list-blog/list-blog.component";
import { UpdateBlogComponent } from "./update-blog/update-blog.component";

const routes: Routes = [
    { path: '', component: ListBlogComponent },
    { path: 'add', component: AddBlogComponent },
    { path: 'update/:id', component: UpdateBlogComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) export class BlogRoutingModule { }


export const routedComponents = [
    AddBlogComponent,
    ListBlogComponent,
    UpdateBlogComponent
];