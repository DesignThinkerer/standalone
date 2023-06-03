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
  recipeService: RecipeService = inject(RecipeService); //inject the RecipeService in the home component class

  constructor() {
    this.recipeList = this.recipeService.getAllRecipe(); //get the recipe list from the RecipeService
  }
}

/*
TODO: 

* recipe list https://angular.io/tutorial/toh-pt2
* recipe service https://angular.io/tutorial/toh-pt4
* detail view https://angular.io/tutorial/toh-pt5
* creation view https://angular.io/tutorial/toh-pt6
* recipe model https://angular.io/tutorial/toh-pt6#add-the-herodata-model
* recipe routing https://angular.io/tutorial/toh-pt5#add-the-approutingmodule
* recipe guard https://angular.io/tutorial/toh-pt5#add-the-canactivate-route-guard
* recipe resolver https://angular.io/tutorial/toh-pt6#add-a-resolver

*/