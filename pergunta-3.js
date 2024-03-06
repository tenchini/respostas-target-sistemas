/* 
3) Descubra a lógica e complete o próximo elemento:
*/

// a) 1, 3, 5, 7, ___
// apenas números ímpares ou incrementando de 2 em 2
const letraA = () => {
    let arr = [1, 3, 5, 7]
    let proxElemento = arr[arr.length - 1] + 2
    return proxElemento // 9
}

console.log(`Letra A: ${letraA()}`)

// b) 2, 4, 8, 16, 32, 64, ____ # 128]
// todo próximo número é o dobro do anterior
const letraB = () => {
    let arr = [2, 4, 8, 16, 32, 64]
    let proxElemento = arr[arr.length - 1] * 2
    return proxElemento // 128
}
console.log(`Letra B: ${letraB()}`)

// c) 0, 1, 4, 9, 16, 25, 36, ____
// todo próximo número é o indíce elevado a 2 (n²)
const letraC = () => {
    let arr = [0, 1, 4, 9, 16, 25, 36]
    let proxElemento = arr.length ** 2
    return proxElemento // 49
}
console.log(`Letra C: ${letraC()}`)

//d) 4, 16, 36, 64, ____
// cada número é o quadrado perfeito dos números pares(2^2, 4^2, 6^2, 8^2)
const letraD = () => {
    let arr = [4, 16, 36, 64]
    let dobroIndex = arr.length * 2
    let proxElemento = (dobroIndex + 2) ** 2
    return proxElemento // 100
}

console.log(`Letra D: ${letraD()}`)

// e) 1, 1, 2, 3, 5, 8, ____
// sequência de fibonacci
const letraE = () => {
    let arr = [1, 1, 2, 3, 5, 8]
    let proxElemento = arr[arr.length - 1] + arr[arr.length - 2]
    return proxElemento // 13
}

console.log(`Letra E: ${letraE()}`)

// f) 2,10, 12, 16, 17, 18, 19, ____
// sequência de números que comecem com a letra 'D'
const letraF = () => {
    let arr = [2, 10, 12, 16, 17, 18, 19]
    let proxElemento = 200
    return proxElemento // 200
}

console.log(`Letra F: ${letraF()}`)
