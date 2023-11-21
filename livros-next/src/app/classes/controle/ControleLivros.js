"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = __importDefault(require("../modelo/Livro"));
class ControleLivros {
    constructor() {
        this.livros = [
            new Livro_1.default(1, 1, 'Livro 1', 'Resumo 1', ['Autor 1', 'Autor 2']),
            new Livro_1.default(2, 2, 'Livro 2', 'Resumo 2', ['Autor 3']),
            new Livro_1.default(3, 3, 'Livro 3', 'Resumo 3', ['Autor 4'])
        ];
    }
    obterLivros() {
        return this.livros;
    }
    incluir(livro) {
        const novoCodigo = Math.max(...this.livros.map(l => l.codigo), 0) + 1;
        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }
    excluir(codigo) {
        const index = this.livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}
exports.default = ControleLivros;
