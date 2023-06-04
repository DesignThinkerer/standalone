export interface Recipe {
    name: string;
    photo: string;
    ingredients: string[];
    instructions: string;
    cookingTime: number;
    difficulty: 'easy' | 'medium' | 'hard';
  }