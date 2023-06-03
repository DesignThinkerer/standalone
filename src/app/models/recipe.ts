export interface Recipe {
    name: string;
    ingredients: string[]; //example for the string array: ["Oeufs", "farine", "lait", "sucre", "beurre", "sel", "levure"]
    instructions: string;
    cookingTime: number;
    difficulty: 'easy' | 'medium' | 'hard';
  }