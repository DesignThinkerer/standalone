import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url: string = 'http://localhost:3000/recipes';

  //asynchronous code that send a get request over HTTP.
  async getAllRecipe(): Promise<Recipe[]> {
    const data = await fetch(this.url);
    //see also HttpClient for more advanced use cases
    return await data.json() ?? [];
  }
  
  async getRecipeById(id: Number): Promise<Recipe | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  //receives the form data to send to the data's destination, here the browser console log
  submitRecipeNotes(comment: string, rating: string) {
    console.log(`Comment about that recipe: ${comment}, rated ${rating}/10`);
  }

  //These functions allow dependencies to access the service's data.
  //They return either a specific Recipe by name or the entire list.
  constructor() { }
}
