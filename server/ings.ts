import { FilterQuery } from "mongodb";
import { ingredientsList } from "./db";

interface Ing {
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
}

export async function findIngs(search?: string): Promise<Ing[]> {
  const regExp = new RegExp(search, "i");
  const query: FilterQuery<Ing> = {
    $or: [{ name: regExp }],
  };
  const cursor = await ingredientsList<Ing[]>("ings").find(query);
  const ings = await cursor.toArray();
  return ings;
}
