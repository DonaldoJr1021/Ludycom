import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AreasService } from './../../service/areas.service';
import { Global } from '../../service/global';
import { Areas } from 'src/app/models/areas';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
	public Areas: Areas[];
	public url: string;
  constructor(
  		private _Areaservice: AreasService
  	){
  		this.url = Global.url;
  	 }

  ngOnInit() {
  	this.getAreasApp();
  }

  // Listar Areas
  getAreasApp(){
  	this._Areaservice.getAreass().subscribe(
  		response =>{
        console.log(response)
  			if (response) {
          this.Areas = response;
  			}
  		},
  		error=>{
  			console.log(<any>error);
  		}
  	);
  }
}
