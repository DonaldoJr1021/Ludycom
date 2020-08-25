import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UserService } from  '../../service/usuario.service';
import { Global } from '../../service/global';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[UserService]
})
export class UsuariosComponent implements OnInit {
	public usuarios: Usuario[];
	public url: string;
  constructor(
  		private _usuarioservice: UserService
  	){
  		this.url = Global.url;
  	 }

  ngOnInit() {
  	this.getUsuariosApp();
  }

  getUsuariosApp(){
  	this._usuarioservice.getUsuarios().subscribe(
  		response =>{
  			if (response.usuarios) {
  				this.usuarios = response.usuarios;
  			}
  		},
  		error=>{
  			console.log(<any>error);
  		}
  	);
  }

}
