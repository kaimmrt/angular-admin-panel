import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent, children: [
      // {
      //   path: 'card', component: CardComponent,
      // }
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }


export const routedComponents = [
  WelcomeComponent,
  CardComponent
];