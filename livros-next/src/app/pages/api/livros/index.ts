import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../../../classes/controle/ControleLivros';

export const controleLivro = new ControleLivro();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = await controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const novoLivro = req.body;
      await controleLivro.incluir(novoLivro);
      res.status(200).json({ mensagem: 'Livro adicionado com sucesso' });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};