import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeList: Recipe[] = [
    {
      name: "Gauffres",
      photo: "https://cdn.stocksnap.io/img-thumbs/960w/P3NGIKBIFL.jpg",
      ingredients: ["Oeufs", "farine", "lait", "sucre", "beurre", "sel", "levure"],
      instructions: "Mélanger les ingrédients, laisser reposer, cuire au gaufrier",
      cookingTime: 11,
      difficulty: 'medium'
    },
    {
      name: "pasta salad olives",
      photo: "https://cdn.stocksnap.io/img-thumbs/960w/pasta%20salad-olives_UWBB1NOLMD.jpg",
      ingredients: ["pasta", "olives", "tomatoes", "basil", "olive oil", "salt", "pepper"],
      instructions: "Cook the pasta, cut the tomatoes and olives, mix everything together",
      cookingTime: 0,
      difficulty: 'easy'
    }
  ];

  getAllRecipe(): Recipe[] {
    return this.recipeList;
  }
  
  getRecipeByName(name: String): Recipe | undefined {
    return this.recipeList.find(recipe => recipe.name === name);
  }

  //These functions allow dependencies to access the service's data.
  //They return either a specific Recipe by name or the entire list.
  constructor() { }
}
