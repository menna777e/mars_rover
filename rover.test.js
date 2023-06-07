
const Rover = require("./rover");

// test('test rover move forward', () => {
//     var rover = new Rover(0,0,"NORTH");
//     rover.shift("F");
//     expect(rover.currentPosition[0]).toBe(0);
//     expect(rover.currentPosition[1]).toBe(1);
// });

test('test rover move backward', () => {
    var rover = new Rover(0,0,"NORTH");
    rover.shift("B");
    expect(rover.currentPosition[0]).toBe(0);
    expect(rover.currentPosition[1]).toBe(-1);
});

// test('test rover turns right', () => {
//     var rover = new Rover(0,0,"NORTH");
//     rover.rotate("R");
//     expect(rover.direction).toEqual("EAST");
// });

// test('test rover turns left', () => {
//     var rover = new Rover(0,0,"NORTH");
//     rover.rotate("L");
//     expect(rover.direction).toEqual("WEST");
// });

// test('test rover move', () => {
//     var rover = new Rover(4,2,"EAST");
//     rover.move("FLFFFRFLB");
//     expect(rover.direction).toEqual("NORTH");
//     expect(rover.currentPosition[0]).toBe(6);
//     expect(rover.currentPosition[1]).toBe(4);
// });

// test('test rover add turn', () => {
//     var rover = new Rover(4,2,"EAST");
//     rover.addTurn("NORTH");
//     expect(rover.instructions[0]).toEqual("L");
//     expect(rover.direction).toEqual("NORTH")
// });

// test('test rover get instructions', () => {
//     var rover = new Rover(0,0,"NORTH");
//     var instructions = rover.getInstructions(1,1,"EAST")
//     expect(instructions).toEqual("FRF");
// });

// test('test rover move within obstacles', () => {
//     var rover = new Rover(4,2,"EAST",[]);
//         rover.move("FLFFFRFLB");
//         expect(rover.direction).toEqual("NORTH");
//         expect(rover.currentPosition[0]).toBe(6);
//         expect(rover.currentPosition[1]).toBe(4);
// });

