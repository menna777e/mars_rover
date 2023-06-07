const Rover  = require('./rover')

const rover = new Rover(4,2,"EAST");
// ,[[1,4],[3,5],[7,4]]
console.log(rover.move("FLFFFRFLB"))
// console.log(rover.shift("B"))

// console.log(rover.getInstructions(1,1,"EAST"))