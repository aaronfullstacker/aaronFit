import { Component, OnInit } from '@angular/core';
import {Recipes} from '../models/recipes'
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  recipe: Recipes;
  constructor(private recipeService: RecipeService) {
    this.recipe={
      name:'',
      instructions:''
    }
   }

  ngOnInit() {
  }

  onClick(){
    this.recipeService.post(this.recipe).subscribe(res => {
      console.log(res);
    });
    
  }
}
