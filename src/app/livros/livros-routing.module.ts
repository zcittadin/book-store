import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';

import { LivrosPage } from './livros.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosPage
  },
  {
    path: 'cadastro',
    component: LivrosCadastroComponent
  },
  {
    path: 'edicao/:id',
    component: LivrosCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosPageRoutingModule {}
