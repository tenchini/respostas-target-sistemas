/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

const fibonacci = (numero) => {
    let anterior = 0
    let atual = 1

    while (anterior <= numero) {
        if (anterior === numero) {
            return `${numero} PERTENCE a sequência de fibonacci.`
        }
        let proximo = anterior + atual
        anterior = atual
        atual = proximo
    }
    return `${numero} NÃO PERTENCE a sequência de fibonacci.`
}

console.log(fibonacci(21))
