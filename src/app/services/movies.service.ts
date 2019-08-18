import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  getFeature() {

    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-08-01&primary_release_date.lte=2019-10-22&api_key=2e3b24695218e357e31e6dbc0fb2e117&language=es&include_image_language=es`);
  }
}
