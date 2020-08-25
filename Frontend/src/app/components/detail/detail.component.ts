import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UserService } from '../../service/usuario.service';
import { Global } from '../../service/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[UserService]
})
export class DetailComponent implements OnInit {
	public url: string;
	public Usuario: Usuario;
  public confirm: boolean;

  constructor(
  		private _usuarioService: UserService,
  		private _router: Router,
  		private _route: ActivatedRoute
  	) {
  	  	this.url = Global.url;
        this.confirm = false;
  	}

  ngOnInit() {
  	this._route.params.subscribe(params =>{
  		let id = params.id;

  		this.getUsuario(id);
  	});
  }

  getUsuario(id){
  	this._usuarioService.getUsuario(id).subscribe(
  		response=>{
  			this.Usuario = response.Usuario;
        console.log(response.Usuario);
  		},
  		error =>{
  			console.log(<any>error)
  		}
  	);
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteUsuario(id){
    this._usuarioService.deleteUsuario(id).subscribe(
      response =>{
      	if (response.Usuario) {
      		this._router.navigate(['/Usuarios']);
      	}
      },
      error =>{
      	console.log(<any>error);
      }
    );
  }

}
