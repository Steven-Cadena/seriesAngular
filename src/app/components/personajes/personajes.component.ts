import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
import { Personajes } from 'src/models/personajes';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes! : Array<Personajes>;
  public idserie!: string;

  constructor(
    private _service:SeriesService,
    private _route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes(){
    this._route.params.subscribe((params:Params) =>{
      this.idserie = params['idserie'];
    });
    this._service.getPersonajeId(this.idserie).subscribe(response=>{
      this.personajes = response;
    });
  }
}
