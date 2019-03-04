import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { RecipesModel } from '../models/recipes.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }
}
