
// 1 - Primeiro pergunta

let index = 13;
let sum = 0;

for (let K = 1; K <= index; K++) {
    sum += K;
}

console.log(sum);

////////////////////////////////////////////////

// 2 - Segunda pergunta

const fibonacciNumber = (number) => {
    let previous = 0;
    let current = 1;

    for (let i = 0; current < number; i++) {
        let next = previous + current;
        previous = current;
        current = next;
    }

    return current === number ? console.log(`${number} pertence à sequência de Fibonacci`) : console.log(`${number} não pertence à sequência de Fibonacci`)
}

fibonacciNumber(13)
fibonacciNumber(7)

///////////////////////////////////////////////

// 3 - Terceira pergunta

let a = [1, 3, 5, 7];
let previousValueA = a.length - 1
let nextA = a[previousValueA] + 2
console.log(nextA)


let b = [2, 4, 8, 16, 32, 64]
let previousValueB = b.length - 1
let nextB = b[previousValueB] * 2
console.log(nextB)

let c = [0, 1, 4, 9, 16, 25, 36]
let previousValuec = c.length - 1 
let nextC = (previousValuec) ** 2
console.log(nextC)


let d = [4, 16, 36, 64];
let previousValueD = d.length - 1 
let nextD = d[previousValueD] + 12
console.log(nextD);


let e = [1, 1, 2, 3, 5, 8]
let previousValueE = e.length - 1 
let penultimateValue = e.length - 2
let nextE = e[previousValueE] + e[penultimateValue]
console.log(nextE) 


let f = [2, 10, 12, 16, 17, 18, 19]
let nextF = f[f.length - 1]
if (nextF == 19) {
  nextF += 1
} else if (nextF % 2 == 0) {
  nextF += 8
} else if (nextF == 17) {
  nextF += 1
} else {
  nextF += 1
}
console.log(nextF);

//////////////////////////////////////////////////

// 4 - Quarta pergunta

const totalDistance = 100
const speedCar = 110
const speedTruck = 80
const timeTollTruck = 5

const timeTollHours = timeTollTruck / 60

const distanceCar = (totalDistance / 2)

const timeCar = distanceCar / speedCar

const distanceTruck = (totalDistance / 2)

const timeTruck = (distanceTruck / speedTruck) + (2 * timeTollHours);

if (timeCar < timeTruck) {

    console.log("O carro está mais próximo da cidade de Ribeirão Preto.") 
} else {

    console.log("O caminhão está mais próximo da cidade de Ribeirão Preto.")
}


// Explicação 
// Primeiro coverti o tempo do pedágio em horas pois todas as outras medidas estão em horas e quilômetros;
// depois fui calcular o tempo que o carro e que o caminhão demoram para chegar em cada pedágio e com esse valores;
// depois de obter esses valores foi só comprar o tempo.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5 - Quinta pergunta

const reverseString = (str) => {
    let newString = ""

    for (let i = str.length - 1; i >= 0; i--) { 
      newString += str[i]
    }
    return newString; 
}

console.log(reverseString("Por favor me aprovem no teste"));