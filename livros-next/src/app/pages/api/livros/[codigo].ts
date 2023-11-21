import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { codigo } = req.query;

    if (req.method === 'DELETE') {
      await controleLivro.excluir(Number(codigo));
      res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};