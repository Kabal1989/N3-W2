import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LinhaLivro = ({ livro, excluir, controleEditora }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  useEffect(() => {
    const carregarLivros = () => {
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    };

    carregarLivros();
  }, [carregado, controleLivro]);

  const handleExcluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={handleExcluir} controleEditora={controleEditora} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;