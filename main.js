
// Cree un programa que ejecute una rutina desde
// 1 hasta un limite dado por el usuario
// en la rutina avance desde 1 hasta el limite de uno en uno
// Por cada numero si el numero es divisible entre 3 imprima fizz
// si el numero es divisible entre 5 imprima buzz
// si el numero es divisible entre 3 y 5 imprima fizzbuzz
// de lo contrario imprima el numero en si
// Limite: 15
// 1, 2, 'fizz', 4, 'buzz', 6...., 'fizzbuzz'
// y cree pruebas unitarias para validar el programa

import { fizzBuzz } from "./utils/fizzBuzz.js";


const main = () => {
    const limit = 1;
    const result = fizzBuzz(limit);
    result.forEach(r => console.log(r));
}

main();


// Crea un programa que dada una lista de numeros
// eg: [1, 3, 5, 7, 8, 11] => Devuelva dos elementos dentro
// de la lista que sumen un valor target dado por el usuaior
// detectar([1, 3, 5, 7], 4) => '1 y 3'
