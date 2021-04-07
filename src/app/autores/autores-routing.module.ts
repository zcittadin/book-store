import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoresCadastroComponent } from './autores-cadastro/autores-cadastro.component';

import { AutoresPage } from './autores.page';

const routes: Routes = [
  {
    path: '',
    component: AutoresPage
  },
  {
    path: 'cadastro',
    component: AutoresCadastroComponent
  },
  {
    path: 'edicao/:id',
    component: AutoresCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoresPageRoutingModule {}
