export type Ingredient = {
  _id: string;
  name: string;
  img: string;
  fat: number;
  carbs: number;
  protein: number;
  family: "Sugars" | "Amids" | "Liquids" | "else";
  vegan: string;
  vegetarian: string;
  glutenFree: string;
  dairyFree: string;
  nutsFree: string;
  soyFree: string;
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
