import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';
import { Areas } from './../models/areas';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  public url:string;


	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Corriendo el servicio';
	}

	saveAreas(user: Areas): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json');


		return this._http.post(this.url+'/area', params, {headers:headers});
	}


	getAreass(): Observable<any>{
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'/areas', {headers:headers});
	}

	getAreas(id): Observable<any>{
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'/area/'+id, {headers:headers});
	}

	deleteAreas(id): Observable<any>{
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.delete(this.url+'/areaeliminar/'+id, {headers:headers});
	}

	updateAreas(Areas): Observable<any>{
		let params = JSON.stringify(Areas);
		let headers  = new HttpHeaders().set('Content-Type','application/json');
		return this._http.put(this.url+'/areaactualizar/'+Areas._id, params, {headers:headers});
	}
}
