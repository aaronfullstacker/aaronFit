import { Component, OnInit } from '@angular/core';
import { Recipes } from '../models/recipes';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipe: Recipes[];
  constructor(private recipeService: RecipeService) {
    this.recipe = [];
  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(res => {
      this.recipe = res;
    })
  }

}
