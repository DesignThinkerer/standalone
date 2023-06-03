import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent {
  @Input() recipe!: RecipeComponent;
  // Input except a value, but here there is no default value, so we use the ! is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
}
