import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
//importante el httheaders para enviar el json
import { Global } from "../global";
import { Observable } from "rxjs";
import { Personajes } from '../../models/personajes';

@Injectable()

export class SeriesService{
       //la inyeccion va en el constructor para poder recuperar las peticiones
       constructor(private _http:HttpClient){}
       getPersonajes():Observable<any>{
            var request = "api/Personajes";
            var url = Global.urlapiseries + request;
            return this._http.get(url);
        }
       getSeries():Observable<any>{
           var request = "/api/series";
           var url = Global.urlapiseries + request;
           return this._http.get(url);
       }
       getSerieId(id:string):Observable<any>{
           var request = "/api/series/" + id;
           var url = Global.urlapiseries + request;
           return this._http.get(url);
       }
       getPersonajeId(id:string):Observable<any>{
           var request = "/api/series/personajesserie/" + id;
           var url = Global.urlapiseries + request;
           return this._http.get(url);
       }
       insertarPersonaje(personaje:Personajes):Observable<any>{
         var request = "/api/personajes";
         var url = Global.urlapiseries + request;
         var json = JSON.stringify(personaje);
         var header = new HttpHeaders().set("Content-Type", "application/json");
         return this._http.post(url,json,{headers:header});
       }
       updatePersonaje(idPersonaje:string, idSerie:string):Observable<any>{
        var request = "api/Personajes/" + idPersonaje + "/" + idSerie;
        var url = Global.urlapiseries + request;
        var valor = "";
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(url, valor, {headers:header});
    }
}