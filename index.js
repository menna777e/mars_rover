const Rover  = require('./rover')

const rover = new Rover(4,2,"EAST",[[1,4],[5,5],[7,4]]);
console.log(rover.move("FLFFFRFLB"))
