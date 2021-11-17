import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
import { Series } from '../../../models/series';

@Component({
  selector: 'app-detallesseries',
  templateUrl: './detallesseries.component.html',
  styleUrls: ['./detallesseries.component.css']
})
export class DetallesseriesComponent implements OnInit {

  public serie!: Series;
  public idserie!: string;
  constructor(
    private _route:ActivatedRoute,
    private _service:SeriesService,
  ) { }

  ngOnInit(): void {

    this.cargarDetalles();
  }

  cargarDetalles(): void{  
    this._route.params.subscribe((params:Params) =>{
      this.idserie = params['idserie'];
    });
    this._service.getSerieId(this.idserie).subscribe(response=>{
      this.serie = response;
    });
  }
}
