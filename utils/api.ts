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

export interface Ing {
  _id: string;
  name: string;
}

export async function searchIngs(search: string): Promise<Ing[]> {
  const url = `/api/ingredients?search=${search}`;
  const response = await fetch(url);
  const ings: Ing[] = await response.json();
  return ings;
}
