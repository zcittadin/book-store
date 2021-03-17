import { Genero } from './genero-enum';

export class Autor {
	id?: number;
	nome: String;
	dataNascimento: Date;
	genero: Genero;
}
