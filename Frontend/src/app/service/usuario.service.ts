import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/Usuario';
import { Global } from './global';


@Injectable()
export class UserService{
	public url:string;


	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Corriendo el servicio';
	}

	saveUsuario(user: Usuario): Observable<any>{
    console.log(user);
		let body = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    let validar = this._http.post(this.url+'Usuario', body, {headers:headers});
    console.log(validar);
		return this._http.post(this.url+'/Usuario', body, {headers:headers});
	}


	getUsuarios(): Observable<any>{
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'/Usuarios', {headers:headers});
	}

	getUsuario(id): Observable<any>{
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'Usuario/'+id, {headers:headers});
	}

	deleteUsuario(id): Observable<any>{
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.delete(this.url+'Usuario/'+id, {headers:headers});
	}

	updateUsuario(Usuario): Observable<any>{
		let params = JSON.stringify(Usuario);
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.put(this.url+'Usuario/'+Usuario._id, params, {headers:headers});
	}
}
