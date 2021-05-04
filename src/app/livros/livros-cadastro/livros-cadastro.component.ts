import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Livro } from '../livro.model';
import { LivrosService } from '../livros.service';

@Component({
	selector: 'app-livros-cadastro',
	templateUrl: './livros-cadastro.component.html',
	styleUrls: ['./livros-cadastro.component.scss'],
})
export class LivrosCadastroComponent implements OnInit {

	livroId: number;
	livrosForm: FormGroup;

	constructor(
		private toastController: ToastController,
		private activatedRoute: ActivatedRoute,
		private livrosService: LivrosService,
		private router: Router,
		) { 
		let livro = {
			id: null,
			titulo: '',
			isbn: 0,
			paginas: 0,
			autor: '',
			preco: 0,
			logo: '',
		};
		this.initializaFormulario(livro);
	}

	ngOnInit() {
		const id = this.activatedRoute.snapshot.paramMap.get('id');
		if(id) {
			this.livroId = parseInt(id);
			this.livrosService
			.getLivro(this.livroId)
			.subscribe((livro) => {
				this.initializaFormulario(livro);
			});
		}
	}

	initializaFormulario(livro: Livro) {
    this.livrosForm = new FormGroup({
      titulo: new FormControl(livro.titulo, [Validators.required, Validators.minLength(3), Validators.maxLength(150),]),
      isbn: new FormControl(livro.isbn, Validators.required),
      paginas: new FormControl(livro.paginas, Validators.required),
      autor: new FormControl(livro.autor, [Validators.required, Validators.minLength(3), Validators.maxLength(150),]),
      preco: new FormControl(livro.preco, Validators.required),
      logo: new FormControl(livro.logo, Validators.required),
    })
  }

  salvar() {
    const livro: Livro = {...this.livrosForm.value, id: this.livroId}
    this.livrosService.salvar(livro).subscribe(
      () => this.router.navigate(['livros']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o livro ${livro.titulo}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
  }

  get titulo() {
    return this.livrosForm.get('titulo');
  }

  get isbn() {
    return this.livrosForm.get('isbn');
  }

  get paginas() {
    return this.livrosForm.get('paginas');
  }

  get autor() {
    return this.livrosForm.get('autor');
  }

  get preco() {
    return this.livrosForm.get('preco');
  }

  get logo() {
    return this.livrosForm.get('logo');
  }

}
