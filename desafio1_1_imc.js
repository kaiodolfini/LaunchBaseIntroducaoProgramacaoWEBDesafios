// Cálculo de IMC
// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = 'Kaio';
const peso = 75;
const altura = 1.66;

const imc = (peso /(altura * altura))
console.log (`O IMC é ${imc}`)
if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você não está acima do peso`)
}