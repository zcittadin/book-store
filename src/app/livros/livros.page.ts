import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController,  } from '@ionic/angular';
import { Router } from '@angular/router';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
	selector: 'app-livros',
	templateUrl: './livros.page.html',
	styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {

	livros: Livro[];

	constructor(
		private alertController: AlertController,
		private toastController: ToastController,
    private routerService: Router,
		private livrosService: LivrosService
		) { }

	ionViewWillEnter() {
		this.listar();
	}

	ngOnInit() {
	}

	listar() {
		this.livrosService.getLivros().subscribe(
			(dados) => {
				this.livros = dados;
				console.log(this.livros);
			}, 
			(erro) => {
				console.error(erro);
			});
	}

	confirmarExclusao(livro: Livro) {
    this.alertController.create({
      header: 'Confirmação de exclusão', 
      message: `Deseja excluir o livro ${livro.titulo}?`,
      buttons: [
      {
        text: 'Sim',
        handler: () => this.excluir(livro)
      },
      {
        text: 'Não',
      }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(livro: Livro) {
    this.livrosService
    .excluir(livro.id)
    .subscribe(
      () => this.listar(),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível excluir o livro ${livro.titulo}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
      );
  }

}
