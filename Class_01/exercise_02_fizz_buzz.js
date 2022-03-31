/* Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo 
   los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos 
   de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.
 */

    /* for(let i = 0; i <= 100; i++){
      if (i === 0) console.log(i)
      else if (i % 15 === 0) console.log(`${i} Fizz Buzz`)
      else if (i % 3 === 0) console.log(`${i} Fizz`)
      else if (i % 5 === 0) console.log(`${i} Buzz`)
      else console.log(i)
    } */

    /* for (let i = 1; i < 101;) 
    console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i) */

    let num
    for(let i = 0; i <= 100; i++){

      switch(num) {
        case 0:
          console.log(i)
          break
        case (i % 15 === 0):
          console.log(`${i} Fizz Buzz`)
          break
        case (i % 3 === 0):
          console.log(`${i} Fizz`)
          break
        case (i % 5 === 0):
          console.log(`${i} Buzz`)
          break
        default:
          console.log(i)
      }
    }