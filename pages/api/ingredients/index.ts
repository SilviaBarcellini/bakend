import type { NextApiRequest, NextApiResponse } from "next";
import {
  withDatabase,
  ingredientsList,
  getIngredients,
} from "../../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    if (Array.isArray(search)) {
      return res.status(400).end();
    }
    if (!search) {
      const list = await ingredientsList();
      res.status(200).json(list);
    } else {
      const list = await getIngredients(search.toString());
      res.status(200).json(list);
    }
  }
);
