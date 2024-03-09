//1- 01 – Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
//(Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
//instância de Carro
class Carro{
    private nome: string;
    private modelo: number;
    private cor: string;

    constructor(nome: string, modelo: number, cor: string){
        this.nome = nome;
        this.modelo = modelo;
        this.cor = cor;
    }
    get getNome():string{
        return this.nome;
    }

    get getModelo():number{
        return this.modelo;
    }

    get getCor():string{
        return this.cor;
    }

    set setNome(novoNome: string){
        this.nome = novoNome;
    }

    set setModelo(novoModelo: number){
        this.modelo = novoModelo;
    }

    set setCor(novoCor: string){
        this.cor = novoCor;
    }

    calcularIdade(): number{
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

class Calculadora{
    private valor1: number;
    private valor2: number;

    constructor(valor1:number, valor2:number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    get getvalor1():number{
        return this.valor1;
    }

    get getValor2():number{
        return this.valor2;
    }
    
    set setValor1(novoValor1: number){
        this.valor1 = novoValor1;
    }

    set setValor2(novoValor2: number){
        this.valor2 = novoValor2;
    }

      
}



//3 - Desenvolva uma classe Produto em TypeScript

class Produto{
    private nome: string;
    private preco: number;
    private estoque: number;

    constructor(nome:string, preco:number, estoque: number){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }   
    get getNome():string{
        return this.nome;
    }

    get getPreco():number{
        return this.preco;
    }
    get getEstoque():number{
        return this.estoque;
    }

    set setNome(novoNome: string){
        this.nome = novoNome;
    }

    set setPreco(novoPreco: number){
        this.preco = novoPreco;
    }

    set setEstoque(novoEstoque: number){
        this.estoque = novoEstoque;
    }

    calcularValorTotalEmEstoque(): number{
        return 2024 - this.estoque;
    }

    reporEstoque(quantidade: number):{

    }

    vender(quantidade: number): {

    }



}

    //Instancia da classe Carro
    let produto1 = new Produto("biscoito", 20 , 10);

    console.log('Nome: ' + produto1.getNome);
    console.log('Preco: R$' + produto1.getPreco);
    console.log('Quantidade: ' + produto1.getEstoque);
    console.log('O calculo da idade do carro é: ' + produto1.calcularValorTotalEmEstoque());



