import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { UserService } from  '../../service/usuario.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `],
  providers:[UserService]
})
export class CreateComponent implements OnInit {

  public title:string;
  public Usuario: Usuario;
  public status: string;
  public save_Usuario;
  public fileToUpload: Array<File>;
  constructor(
  	private _usuarioService: UserService,

  ) {
  	this.title= "Crear un nuevo usuario";
  	this.Usuario = new Usuario(0,'', '', '', '', '',0, 0, true);
  }

  ngOnInit() {

  }

  onSubmit(form:NgForm){
    console.log(form.value);
  	this._usuarioService.saveUsuario(this.Usuario).subscribe(
  		response =>{
  			if (response.Usuario) {
             this.save_Usuario = response.Usuario;
              this.status = 'success';
              form.reset();
           }
  		},
  		error=>{
  			console.log(<any>error)
  		}
  	);

    }
}
