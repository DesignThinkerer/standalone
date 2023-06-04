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
  filteredRecipeList: Recipe[] = [];
  //hold the values that match the search criteria entered by the user.

  recipeService: RecipeService = inject(RecipeService); //inject the RecipeService in the home component class


  filterResults(text: string) {
  /*
  this function uses the String filter function to compare the value of the text parameter against the recipe.name property. This function can be updated to match against any property or multiple properties.
  */
    if (!text) {
      this.filteredRecipeList = this.filteredRecipeList;
    }
  
    this.filteredRecipeList = this.filteredRecipeList.filter(
      recipe => recipe?.name.toLowerCase().includes(text.toLowerCase())
    );
  }



  constructor() {
    this.recipeList = this.recipeService.getAllRecipe();

    //filteredRecipeList should contain the total set of recipes by default when the page loads.

    this.filteredRecipeList = this.recipeList;
  }
}