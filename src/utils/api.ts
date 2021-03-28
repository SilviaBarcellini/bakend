export type Ingredient = {
  _id: string;
  name: string;
  image: string;
  fat: number;
  carbs: number;
  protein: number;
  family: "Sugars" | "Fats" | "Liquids" | "else";
  vegan: boolean;
  vegetarian: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  nutsFree: boolean;
  soyFree: boolean;
};

export async function getIngredient(name: string): Promise<Ingredient> {
  const response = await fetch(`/api/ingredients/${name}`);

  const ingredient = await response.json();
  return ingredient;
}

export async function getIngredients(): Promise<Ingredient[]> {
  const response = await fetch(`/api/ingredients`);

  const ingredients = await response.json();
  return ingredients;
}
