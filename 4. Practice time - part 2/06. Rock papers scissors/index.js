let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomItem() {
    let randomNumber = Math.random()
    if (randomNumber <0.33){
        return hands[0]
    } else if (randomNumber <0.66){
        return hands[1]
    } else{
        return hands[2]
    }
}
let randomHand = randomItem()
console.log(randomHand)