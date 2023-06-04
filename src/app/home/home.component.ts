import { Component, inject } from "@angular/core"; //import inject function in the home component class
import { CommonModule } from "@angular/common";
import { RecipeComponent } from "../recipe/recipe.component";
import { Recipe } from "../models/recipe";

import { RecipeService } from "../services/recipe.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RecipeComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})

export class HomeComponent {
  recipeList: Recipe[] = [];
  filteredRecipeList: Recipe[] = []; //store data in a array property that will be used for filtering.

  recipeService: RecipeService = inject(RecipeService); //inject the RecipeService in the home component class

  constructor() {
    this.recipeList = this.recipeService.getAllRecipe(); //get the recipe list from the RecipeService
  }
}