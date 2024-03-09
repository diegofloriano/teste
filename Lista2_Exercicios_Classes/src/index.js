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
    calcularIdade() {
        return 2024 - this.modelo;
    }
}
// imprimirCarro():void{
//     console.log(`Cor: ${this.cor}, Idade: ${this.modelo}`);
//}
//Instancia da classe Carro
let carro1 = new Carro("camaro", 2009, "vermelho");
console.log(carro1.getNome);
console.log(carro1.getModelo);
console.log(carro1.getCor);
console.log(carro1.calcularIdade());
// //2
// class Calculadora{
//     private valor1: number;
//     private valor2: number;
//     constructor(nome:string, idade:number,matricula:string,turma:string){
//         this.valor1 = valor1;
//         this.valor2 = valor2;
//     }
// }
// //3-
// class Produto{
//     private nome: string;
//     private preço: number;
//     private QuantidadeEmEstoque: number;
//     constructor(nome:string, idade:number,matricula:string,turma:string){
//         this.nome =nome;
//         this.preço = preço;
//         this.QuantidadeEmEstoque = QuantidadeEmEstoque;
//     }   
// }
