
class Rover {

    constructor(x = 0, y = 0, direction = "NORTH",obstacles=[]) {
        this.currentPosition = [x,y];
        this.direction = direction;
        this.directions = ["NORTH", "EAST", "SOUTH", "WEST"];
        this.obstacles = obstacles;
        this.status = "";
        this.instructions ="";
      }

    
    move(instructions){
        const commands = instructions?.split("");
        this.translateCommands(commands)
        return `(${this.currentPosition[0]},${this.currentPosition[1]}) ${this.direction} ${this.status}`
    }

    translateCommands(commands) {
        commands?.map(command =>{
            switch (command){
                case "L":
                case "R":
                    this.rotate(command);
                    break;
                case "F":
                case "B":
                    this.shift(command);
                    break;
            }
        })
    }

    shift(command) {
        let [x,y] = [0,0];
        let newPosition;

        if (this.status == "STOPPED") return;

        switch(this.direction){
            case "NORTH" :
                y+=1;
                break;
            case "SOUTH" :
                y-=1;
                break;
            case "EAST" :
                x+=1;
                break;
            case "WEST" :
                x-=1;
                break;
        }

        switch(command){ 
            case "B":
                x*= -1;
                y*= -1;
                break;
            default:
                    break;
        }

        newPosition = [this.currentPosition[0] + x, this.currentPosition[1] + y];

        this.isObstacle(newPosition[0], newPosition[1]) ? this.status = "STOPPED" : this.currentPosition = newPosition;
        
    }

    rotate(command){
        let index = this.directions.indexOf(this.direction);

        switch(command) {
            case "L" :
                index == 0 ? index = 3 : index -=1;
                break;
            case "R" :
                index == 3 ? index = 0 : index +=1;
                break;
        }
        this.direction = this.directions[index]
    }

    isObstacle(x,y) {

        console.log(this.currentPosition)

        let obstacle = this.obstacles.find(obstacle => obstacle[0] === x && obstacle[1] === y);

        if(obstacle) return true;
        // for(var index = 0; index < self.obstacles.length; index++) {
        //     if (newLocation.toString() == self.obstacles[index].toString()) {
        //         self.status = 'obstacle';
        //         return true;
        //     }
        // }
        return false;
    }


    getInstructions(x = 1,y = 1,direction = "EAST"){
        this.targetPosition = [x,y];

        switch(this.direction){

            // to get shortest instructions
            case "NORTH":
            case "SOUTH":
                this.addShift_Y();
                this.addShift_X();
                break;
            case "EAST":
            case "WEST":
                this.addShift_X();
                this.addShift_Y();
                break;

        }

        while (this.direction !== direction){
            this.addTurn(direction)
        }

        return this.instructions

    }

    addShift_X(){
        while (this.currentPosition[0] < this.targetPosition[0] ) {
            switch(this.direction){
                case "EAST":
                    this.instructions+="F";
                    this.currentPosition[0] += 1;
                    break;
                case "WEST":
                    this.instructions+="B";
                    this.currentPosition[0] += 1;
                    break;
                default:
                    this.addTurn("EAST");
                    break;
            }
        }

        while (this.currentPosition[0] > this.targetPosition[0]) {
            switch(this.direction){
                case "EAST":
                    this.instructions+="B";
                    this.currentPosition[0] -= 1;
                    break;
                case "WEST":
                    this.instructions+="F";
                    this.currentPosition[0] -= 1;
                    break;
                default:
                    this.addTurn("WEST");
                    break;
            }
        }
    }

    addShift_Y(){
        while (this.currentPosition[1] < this.targetPosition[1]) {
            switch(this.direction){
                case "NORTH":
                    this.instructions+="F";
                    this.currentPosition[1] += 1;
                    break;
                case "SOUTH":
                    this.instructions+="B";
                    this.currentPosition[1] += 1;
                    break;
                default:
                    this.addTurn("NORTH");
                    break;
            }
        }

        while (this.currentPosition[1] > this.targetPosition[1]) {
            switch(this.direction){
                case "NORTH":
                    this.instructions+="B";
                    this.currentPosition[1] -= 1;
                    break;
                case "SOUTH":
                    this.instructions+="F";
                    this.currentPosition[1] -= 1;
                    break;
                default:
                    this.addTurn("SOUTH");
                    break;
            }
        }


    }

    addTurn(direction){
        let currentIndex = this.directions.indexOf(this.direction);
        let targetIndex = this.directions.indexOf(direction);
        let difference = targetIndex - currentIndex

        difference > 0 ? ( this.instructions+="R",
        this.direction = this.directions[currentIndex + 1]) : (this.instructions+="L",
        this.direction = this.directions[currentIndex - 1])
    }


}
module.exports = Rover
