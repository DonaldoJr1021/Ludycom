import { AreasService } from './../../service/areas.service';
import { Areas } from './../../models/areas';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-crear-areas',
  templateUrl: './crear-areas.component.html',
  styleUrls: ['./crear-areas.component.css'],
  providers:[AreasService]
})
export class CrearAreasComponent implements OnInit {
  public title:string;
  public Areas: Areas;
  public status: string;
  public save_Areas;
  constructor(
  	private _areasService: AreasService,

  ) {
  	this.title= "Crear nueva area";
  	this.Areas = new Areas(0,'', true, 0,);
  }
  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  	this._areasService.saveAreas(this.Areas).subscribe(
  		response =>{
  			if (response.Usuario) {
             this.save_Areas = response.Usuario;
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
