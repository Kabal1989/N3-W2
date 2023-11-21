"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Editora_1 = __importDefault(require("../modelo/Editora"));
class ControleEditora {
    constructor() {
        this.editoras = [
            new Editora_1.default(1, 'Editora A'),
            new Editora_1.default(2, 'Editora B'),
            new Editora_1.default(3, 'Editora C')
        ];
    }
    getNomeEditora(codEditora) {
        const editora = this.editoras.find(e => e.codEditora === codEditora);
        return editora ? editora.nome : 'Editora não encontrada';
    }
    getEditoras() {
        return this.editoras;
    }
}
exports.default = ControleEditora;
