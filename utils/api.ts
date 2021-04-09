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
  inst: number;
  liq: number;
  sweetPower: number;
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
