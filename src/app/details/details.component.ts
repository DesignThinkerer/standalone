import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  recipeService: RecipeService = inject(RecipeService);
  recipe: Recipe | undefined;

  constructor(){
    const recipeName = this.route.snapshot.params['name'];
    //call to the recipeService to pass the route parameter as an argument to the getRecipeByName service function
    this.recipe = this.recipeService.getRecipeByName(recipeName);
  }
}
