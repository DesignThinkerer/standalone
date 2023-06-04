export interface Recipe {
    id: number;
    name: string;
    photo: string;
    ingredients: string[];
    instructions: string;
    cookingTime: number;
    difficulty: 'easy' | 'medium' | 'hard';
  }