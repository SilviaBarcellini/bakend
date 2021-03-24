// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, readIngredient } from "../../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { name } = req.query;

    const ingredient = await readIngredient(name);
    res.status(200).json(ingredient);
  }
);
