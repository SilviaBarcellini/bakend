import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, ingredientsList } from "../../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const list = await ingredientsList("Ingredients");
    res.status(200).json(list);
  }
);
