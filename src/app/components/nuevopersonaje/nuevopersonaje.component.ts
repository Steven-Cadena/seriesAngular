import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Series } from 'src/models/series'; 
import { Personajes } from '../../../models/personajes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevopersonaje',
  templateUrl: './nuevopersonaje.component.html',
  styleUrls: ['./nuevopersonaje.component.css']
})
export class NuevopersonajeComponent implements OnInit {
  public series!: Array<Series>;
  @ViewChild("cajanombre") cajanombre!:ElementRef;
  @ViewChild("cajaimagen") cajaimagen!:ElementRef;
  @ViewChild("cajaselect") cajaselect!:ElementRef;
  public personaje!: Personajes;
  constructor(
    private _service:SeriesService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.cargarSeries();
  }
  cargarSeries(){
    this._service.getSeries().subscribe(response=>{
      this.series = response;
    });
  }

  insertarPersonaje(){
    var nombre = this.cajanombre.nativeElement.value;
    var imagen = this.cajaimagen.nativeElement.value;
    var select = parseInt(this.cajaselect.nativeElement.value);
    this.personaje = new Personajes(0, nombre,imagen,select);
    this._service.insertarPersonaje(this.personaje).subscribe(res => {
      this._router.navigate(['/personajes',select]);
    });
  }
}
