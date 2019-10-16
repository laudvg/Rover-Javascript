// Rover Object Goes Here
let rover = {
    direction: "N"
  };
  
  
  function turnLeft(rover){
    switch (rover.direction){
      case "N":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "S"; 
        break;
    };
    console.log("turnLeft was called");
  };
  
  
  function turnRight(rover){
      switch (rover.direction){
      case "N":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "N"; 
        break;
    };
    console.log("turnRight was called");
  };
  
  // Add two properties to your rover called x and y. 
  //Their default values will both be set to 0.
  rover.x = 0;
  rover.y = 0;
  
  function moveForward(rover){
        switch(rover.direction){
           case "E":
              if(rover.x < 9){
                rover.x++;
              } else {
              console.log("The rover can't move outside the perimeter");
              }
            break;
           case "W":
              if(rover.x > 0){
                rover.x--;
              } else {
              console.log("The rover can't move outside the perimeter");
              }
            break; 
           case "N":
              if(rover.y <= 9 && rover.y > 0){
                rover.y--;
              } else {
              console.log("The rover can't move outside the perimeter");
              }
            break;
           case "S":
              if(rover.y < 9 && rover.y >= 0){
                rover.y++;
              } else {
              console.log("The rover can't move outside the perimeter");
              }
            break;        
    };
    console.log(`Rover current coordinates: x = ${rover.x}, y = ${rover.y}`);
    };
  
  function moveBackwards(rover){
        switch(rover.direction){
           case "E":
              if(rover.x <= 9 && rover.x > 0){
                rover.x--;
              } else {
              console.log("The rover can't move outside the perimeter");
              }
            break;
           case "W":
              if(rover.x < 9 && rover.x >= 0){
                rover.x++;
              } else {
              console.log("The rover can't move outside the perimeter");
              }
            break; 
           case "N":
              if(rover.y < 9){
                rover.y++;
              } else {
              console.log("The rover can't move outside the perimeter");
              }
            break;
           case "S":
              if(rover.y > 0){
                rover.y--;
              } else {
              console.log("The rover can't move outside the perimeter");
              }
            break;        
    };
    console.log(`Rover current coordinates: x = ${rover.x}, y = ${rover.y}`);
    };
  
  
  function listOfCommands(orders){
   for (let i = 0; i < orders.length; i++){
      let order = orders[i];
      switch(order){
        case "l": // left
          turnLeft(rover);
          console.log(`Rover is now facing: ${rover.direction}`)
          break;
        case "r": // right
          turnRight(rover);
          console.log(`Rover is now facing: ${rover.direction}`)
          break;  
        case "f": // forwards
          moveForward(rover);
          break;
        case "b": // backwards
          moveBackwards(rover);
          break; 
        default:
         console.log(`Unvalid command. Choose "l" for "Turn Left", "r" for "Turn Right, "f" for "Forward" or "b" for "Backwards"`);
         break;
      };
    };
    };
  
  listOfCommands("rfffrfffflffffflffr");
  console.log(rover) // to test
  
  /*  Test routes
  
  -ruta 1: "rfffrfffflffffflffr"
  -ruta 2 clockwise por el borde: "rfffffffffffffffrffffffffffffrffffffffffffffffrfffffffffffff"
  -ruta 3 anti clock wise por el borde:"lffflffffffffffflffffffffflfffffffffflfffffffffffff"
  -ruta 4 anti clock wise por el borde backwards: "bbbbbbbbbblbbbbbbbbblbbbbbbbbbblbbbbbbbbbb"
  -ruta 5 clock wise por el borde backwards:"rrrbbbbbbbbbbrbbbbbbbbbrbbbbbbbbbbrbbbbbbbbbb"
  
  */