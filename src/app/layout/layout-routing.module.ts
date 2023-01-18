import { LayoutComponent } from './layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // loadChildren: () =>
    //   import('./layout/layout.module').then((m) => m.LayoutModule),
    // children: [
    // {
    //   path: '',
    //   component: HomeComponent,
    // },
    // {
    //   path: 'templates',
    //   loadChildren: () =>
    //     import('./bot-templates/bot-templates.module').then(
    //       (m) => m.BotTemplatesModule
    //     ),
    // },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
