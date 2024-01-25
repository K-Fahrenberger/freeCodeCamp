// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = getRandomInt(2, 12)
let secondCard = getRandomInt(2, 12)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

  let sum = firstCard + secondCard
// 2. Create a variable, sum, and set it to the sum of the two cards
console.log(firstCard)
console.log(secondCard)
console.log(sum)