import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Autor } from './autor-model';
import { Genero } from './genero-enum';
import { AutorService } from './autor.service';

@Component({
	selector: 'app-autores',
	templateUrl: './autores.page.html',
	styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {

	autores: Autor[];

	constructor(
		private alertController: AlertController,
		private autorService: AutorService
		) {
		this.listar();
	}

	ngOnInit() {}

	confirmarExclusao(autor: Autor) {
		this.alertController.create({
			header: 'Confirmação de exclusão',
			message: `Deseja excluir o autor ${autor.nome}?`,
			buttons: [
			{
				text: 'Sim',
				handler: () => this.excluir(autor)
			},
			{
				text: 'Não',
			}
			]
		}).then(alerta => alerta.present());
	}

	listar () {
		this.autores = this.autorService.getAutores();
	}

	private excluir(a: Autor) {
		this.autorService.excluir(a.id);
		this.listar();
	}
}
