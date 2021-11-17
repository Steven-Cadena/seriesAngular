import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
import { Personajes } from '../../../models/personajes';
import { Series } from 'src/models/series';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit {
  public series! : Array<Series>;
  public personajes! : Array<Personajes>;
  @ViewChild("selectSeries") selectSeries! : ElementRef;
  @ViewChild("selectPersonaje") selectPersonaje! : ElementRef;

  constructor(private _service : SeriesService, private _router : Router) { }

  ngOnInit(): void {
    this.cargarSeries();
    this.cargarPersonajes();
  }

  cargarPersonajes(){
    this._service.getPersonajes().subscribe(res => {
      this.personajes = res;
    });
  }

  cargarSeries(){
    this._service.getSeries().subscribe(res => {
      this.series = res;
    });
  }

  modificarPersonaje(){
    var idSerie = this.selectSeries.nativeElement.value;
    var idPersonaje = this.selectPersonaje.nativeElement.value;
    this._service.updatePersonaje(idPersonaje, idSerie).subscribe(res => {
      this._router.navigate(['/personajes',idSerie]);
    });
  }
}
