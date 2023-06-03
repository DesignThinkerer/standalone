export interface Recipe {
    name: string;
    ingredients: string[];
    instructions: string;
    cookingTime: number;
    difficulty: 'easy' | 'medium' | 'hard';
  }