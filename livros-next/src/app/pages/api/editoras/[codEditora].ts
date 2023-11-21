import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { codEditora } = req.query;
    const editora = await controleEditora.getNomeEditora(Number(codEditora));

    res.status(200).json({ nome: editora });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};