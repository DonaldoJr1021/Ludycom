import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UserService } from  '../../service/usuario.service';
import { UploadService } from  '../../service/upload.service';
import { Global } from '../../service/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[UserService,UploadService]
})
export class EditComponent implements OnInit {

  public title:string;
  public Usuario: Usuario;
  public status: string;
  public save_Usuario;
  public fileToUpload: Array<File>;
  public url: string;
  constructor(
  	private _UsuarioService: UserService,
    private _uploadService: UploadService,
  	private _route: ActivatedRoute,
    private _router: Router
  )
  {
  	this.title= "Editar Usuario";
  	this.url= Global.url;
  }

    ngOnInit() {
  	this._route.params.subscribe(params =>{
  		let id = params.id;

  		this.getUsuario(id);
  	});
  }

  getUsuario(id){
  	this._UsuarioService.getUsuario(id).subscribe(
  		response=>{
  			this.Usuario = response.Usuario;
  		},
  		error =>{
  			console.log(<any>error)
  		}
  	);
  }

  onSubmit(){
  	this._UsuarioService.updateUsuario(this.Usuario).subscribe(
  		response=>{
  			if (response.Usuario) {
          		if (this.fileToUpload) {
          		this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.Usuario._id, [], this.fileToUpload, 'image')
                    .then((result:any) => {
                    this.save_Usuario = result.Usuario;
                    this.status = 'success';
                });
                }else{
                	this.save_Usuario = response.Usuario;
                	this.status = 'success'
                }

  			}else{
  				this.status = 'failed'
  			}
  		},
  		error =>{
  			console.log(<any>error)
  		}
  	);
  }

 	fileChangeEvent(fileInput: any){
      this.fileToUpload = <Array<File>>fileInput.target.files;
    }

}
