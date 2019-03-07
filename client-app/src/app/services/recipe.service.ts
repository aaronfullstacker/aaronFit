import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipes } from '../models/recipes';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }

  onClick(r: Recipes): Observable<string>{
    console.log(r);
    return this.httpClient.post<string>('http://localhost:8888/recipes', r);
  }

  getRecipes():Observable<Recipes[]>{
    return this.httpClient.get<Recipes[]>('http://localhost:8888/recipes');
  }
}
