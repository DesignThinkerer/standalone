import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipeComponent } from "../recipe/recipe.component";
import { Recipe } from "../models/recipe";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RecipeComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})

export class HomeComponent {
  recipe: Recipe = {
    name: "Gauffres",
    photo: "https://cdn.stocksnap.io/img-thumbs/960w/P3NGIKBIFL.jpg",
    ingredients: ["Oeufs", "farine", "lait", "sucre", "beurre", "sel", "levure"],
    instructions: "Mélanger les ingrédients, laisser reposer, cuire au gaufrier",
    cookingTime: 11,
    difficulty: 'easy'
  };
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