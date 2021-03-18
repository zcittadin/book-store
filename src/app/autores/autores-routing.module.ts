import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoresPage } from './autores.page';
import { AutoresCadastroComponent } from './autores-cadastro/autores-cadastro.component';

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
