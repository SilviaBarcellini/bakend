import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

let client = null;
let db = null;

const url = process.env.MONGODB_URL;

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "Bakend");
  return await handler(req, res);
};

export async function connectDB(url, dbName) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export async function getCollection(collectioName) {
  return await db.collection(collectioName);
}

export async function ingredientsList(collectioName) {
  return await db.collection(collectioName).find().toArray();
}

export async function readIngredient(ingredientName) {
  const ingredientCollection = await getCollection("Ingredients");
  return await ingredientCollection.findOne({ name: ingredientName });
}

export function closeDB() {
  client.close();
}
