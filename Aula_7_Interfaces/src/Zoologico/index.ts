import {Animal} from "./Animal"
import {Leao} from "./Leao"
import {Pato} from "./Pato"


function imprimeAnimal(animal: Animal){
    console.log(`O animal ${animal.name} eh mamifero :${animal.mamifero()}`);
    console.log(`O animal ${animal.name} eh mamifero :${animal.ave()}`);
}