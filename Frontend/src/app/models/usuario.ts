import { Binary } from '@angular/compiler';

export class Usuario {
	constructor(
		public id: number,
		public Nombres: string,
		public Apellidos: string,
    public Email: string,
    public Numero_Documento: string,
		public Fecha_Nacimiento: string,
    public IdArea: number,
    public Salario: number,
    public Estado: boolean,
	){}
}
