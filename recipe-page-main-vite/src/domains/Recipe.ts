export type RecipeData = {
  title: string;
  description: string;
  prepTime: PrepTimeData;
  ingredients: string[];
  instructions: InstructionsData[];
  nutrition: NutritionData;
};

export type PrepTimeData = {
  total: string;
  preparation: string;
  cooking: string;
};

export type InstructionsData = {
  num: number;
  step: string;
  description: string;
};

export type NutritionData = {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
};
