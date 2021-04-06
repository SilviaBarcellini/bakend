// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { findIngs } from "../../server/ings";
import { withDatabase } from "../../server/utils";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    if (Array.isArray(search)) {
      return res.status(400).end();
    }
    const ings = await findIngs(search);
    res.status(200).json(ings);
  }
);
