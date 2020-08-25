import { Areas } from 'src/app/models/areas';
import { AreasService } from './../../service/areas.service';
import { Component, OnInit } from '@angular/core';
import { Global } from '../../service/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-areas-detail',
  templateUrl: './areas-detail.component.html',
  styleUrls: ['./areas-detail.component.css'],
  providers:[AreasService]
})
export class AreasDetailComponent implements OnInit {
	public url: string;
	public Area: Areas;
  public confirm: boolean;

  constructor(
  		private _AreaService: AreasService,
  		private _router: Router,
  		private _route: ActivatedRoute
  	) {
  	  	this.url = Global.url;
        this.confirm = false;
  	}

  ngOnInit() {
    // Se obtiene el id del area seleccionada
  	this._route.params.subscribe(params =>{
      let id = params.id;
      //Se envía el id para mostrar la información del area seleccionada
  		this.getArea(id);
  	});
  }

  //Trae el area seleccionada
  getArea(id){
  	this._AreaService.getAreas(id).subscribe(
  		response=>{
  			this.Area = response;
  		},
  		error =>{
  			console.log(<any>error)
  		}
  	);
  }

  //Confirmar eliminación
  setConfirm(confirm){
    this.confirm = confirm;
  }

  //Eliminar el area seleccionada
  deleteArea(id){
    this._AreaService.deleteAreas(id).subscribe(
      response =>{
      	if (response) {
      		this._router.navigate(['/areas']);
      	}
      },
      error =>{
      	console.log(<any>error);
      }
    );
  }
}
