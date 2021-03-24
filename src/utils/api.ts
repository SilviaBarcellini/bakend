export type APIIngredient = {
  id: number;
  image: string;
  name: string;
  fat: number;
  carbs: number;
  protein: number;
  family: "Sugar" | "Amids" | "Liquids" | "else";
  vegan: boolean;
  vegetarian: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  nutsFree: boolean;
  soyFree: boolean;
};

export type APIIngredients = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: APIIngredients[];
};

export type Ingredient = {
  image: string;
  name: string;
  family: "Sugar" | "Amids" | "Liquids" | "else";
  fat: number;
  carbs: number;
  protein: number;
  vegan: boolean;
  vegetarian: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  nutsFree: boolean;
  soyFree: boolean;
};

function convertToCard(apiIngredient: APIIngredient): Ingredient {
  return {
    name: apiIngredient.name,
    image: apiIngredient.image,
    family: apiIngredient.family,
    fat: apiIngredient.fat,
    carbs: apiIngredient.carbs,
    protein: apiIngredient.protein,
    vegan: apiIngredient.vegan,
    vegetarian: apiIngredient.vegetarian,
    glutenFree: apiIngredient.glutenFree,
    dairyFree: apiIngredient.dairyFree,
    nutsFree: apiIngredient.nutsFree,
    soyFree: apiIngredient.soyFree,
  };
}

export async function getIngredient(id: number) {
  const response = await fetch(
    `http://localhost:3000/api/ingredientsList${id}`
  );
  if (!response.ok) {
    const result = await response.json();
    return {
      name: result.error,
      image: "",
    } as Ingredient;
  }
  const result = (await response.json()) as APIIngredient;
  const card = convertToCard(result);
  return card;
}
