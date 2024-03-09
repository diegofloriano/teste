"use strict";
//1- 01 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
//(Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
//instância de Carro
class Carro {
    constructor(nome, modelo, cor) {
        this.nome = nome;
        this.modelo = modelo;
        this.cor = cor;
    }
    get getNome() {
        return this.nome;
    }
    get getModelo() {
        return this.modelo;
    }
    get getCor() {
        return this.cor;
    }
    set setNome(novoNome) {
        this.nome = novoNome;
    }
    set setModelo(novoModelo) {
        this.modelo = novoModelo;
    }
    set setCor(novoCor) {
        this.cor = novoCor;
    }
    calcularIdade() {
        return 2024 - this.modelo;
    }
}
//Instancia da classe Carro
let carro1 = new Carro("camaro", 2009, "vermelho");
console.log('Nome: ' + carro1.getNome);
console.log('Modelo: ' + carro1.getModelo);
console.log('Cor: ' + carro1.getCor);
console.log('O calculo da idade do carro é: ' + carro1.calcularIdade());
//2 - Desenvolva uma classe Calculadora em TypeScript 
// class Calculadora{
//     private valor1: number;
//     private valor2: number;
//     constructor(nome:string, idade:number,matricula:string,turma:string){
//         this.valor1 = valor1;
//         this.valor2 = valor2;
//     }
// }
//3 - Desenvolva uma classe Produto em TypeScript
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    get getNome() {
        return this.nome;
    }
    get getPreco() {
        return this.preco;
    }
    get getQuantidade() {
        return this.quantidadeEmEstoque;
    }
    set setNome(novoNome) {
        this.nome = novoNome;
    }
    set setPreco(novoPreco) {
        this.preco = novoPreco;
    }
    set setQuantidade(novoQuantidade) {
        this.quantidadeEmEstoque = novoQuantidade;
    }
}
//Instancia da classe Carro
let produto1 = new Produto("biscoito", 20.00, 10);
console.log('Nome: ' + produto1.getNome);
console.log('Preco: R$' + produto1.getPreco);
console.log('Quantidade: ' + produto1.getQuantidade);
