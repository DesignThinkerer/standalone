import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  recipeService: RecipeService = inject(RecipeService);
  recipe: Recipe | undefined;

  //create the form object
  /*
  FormGroup and FormControl are types to build forms. The FormControl type can provide a default value and shape the form data. In this example comment is a string and the default value is an empty string.
  */
  recipeNotesForm = new FormGroup({
    comment: new FormControl(''),
    rating: new FormControl('')
  })

  constructor() {
    const recipeId = parseInt(this.route.snapshot.params['id'], 10);
    this.recipeService.getRecipeById(recipeId).then(recipe => {
      this.recipe = recipe;
    });
  }

  //handle the apply now click
  submitRecipeNotes(){
    this.recipeService.submitRecipeNotes(
      //uses the nullish coalescing operator to default to empty string if the value is null.
      this.recipeNotesForm.value.comment ?? '',
      this.recipeNotesForm.value.rating ?? ''
      );
  }

}
