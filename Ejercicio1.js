let arr = [1, 2, 3, 4, 5, 6];

let modifiedArr = arr.map(function (element) {
    return element * 2;
})
console.log(modifiedArr);

const par = arr.filter(function (a){
    return a % 2 === 0
})
console.log(par)

const suma = arr.reduce((acc, numero) => acc + numero)
console.log(suma) 

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

// utilizar el método reduce para sumar todos los elementos
// 21