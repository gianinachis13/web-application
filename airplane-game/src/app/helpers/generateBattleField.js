import { shipType } from "../constants/constants";

/*
* Method generates battlefield with placed ship
* */
export const getBattleField = (grid) => {
  console.log("0",grid)
  let battleField = [];
  for (let i = 0; i < grid; i++) {
    battleField[i] = [];
    for (let j = 0; j < grid; j++) {
      battleField[i][j] = null;
    }
  }
  for (let i = 0; i < shipType.length; i++) {
    battleField = generateShipPositions(shipType[i], battleField, grid);
  }
  return battleField;
};

/*
* Generates random ship positions
*
* @param1 initial ship
* @param2 initial battlefield
*
* @returns updated battlefield
* */
const generateShipPositions = (ship, battleField, grid) => {
  console.log("1",grid)
  let shipStartPosition = null;
  let continueLoop = true;
  while (continueLoop) {
    shipStartPosition = getRandomCoordinate(grid);
    if (positionIsFree(battleField, shipStartPosition)) {
      let x = shipStartPosition[0];
      let y = shipStartPosition[1];
      let directions = getDirections();
      battleField[x][y] = ship.id * 100;

      for (let i = 0; i < directions.length; i++) {

        let tempBattlefield = makeClone(battleField, grid);
        let newBattleField = tryDirections(directions[i], ship, shipStartPosition, tempBattlefield, grid);
        if (newBattleField !== null) {
          continueLoop = false;
          battleField = [...newBattleField];
          break;
        } else {
          tempBattlefield = newBattleField = null;
        }
      }
    }
  }
  return battleField;
};

/*
*  Method tries different direction of ship placement
*    @param1 direction
*    @param2 initialship
*    @param3 start position
*    @param4 initial battlefield
*
*    @returns new battlefield or null
* */
function tryDirections(direction, ship, shipStartPosition, battleField, grid) {
  let x = shipStartPosition[0];
  let y = shipStartPosition[1];
  let wrongDirection = false;

  for (let i = 1; i < ship.size; i++) {
    switch (direction) {
      case 0:

        if (y + i > grid-1) {
          wrongDirection = true;
          break;
        } else if (positionIsFree(battleField, [x, y + i]) || battleField[x][y + i] === ship.id) {
          battleField[x][y + i] = ship.id * 100;
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 1:
        if (x + i > grid-1) {
          wrongDirection = true;
          break;
        } else if (positionIsFree(battleField, [x + i, y]) || battleField[x + i][y] === ship.id) {
          battleField[x + i][y] = ship.id * 100;
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 2:
        if (y - i < 0) {
          wrongDirection = true;
          break;
        } else if (positionIsFree(battleField, [x, y - i]) || battleField[x][y - i] === ship.id) {
          battleField[x][y - i] = ship.id * 100;
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 3:
        if (x - i < 0) {
          wrongDirection = true;
          break;
        } else if (positionIsFree(battleField, [x - i, y]) || battleField[x - i][y] === ship.id) {
          battleField[x - i][y] = ship.id * 100;
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }

      default:
        break;
    }
  }
  if (wrongDirection) {
    return null;
  } else {
    return battleField;
  }
}



/*
*  Checks position
*
*  @param1 initial battlefield
*  @param2 initial positin
*
*  @return true if position is free
* */
const positionIsFree = (battleField, position) => {
  let x = position[0];
  let y = position[1];
  console.log(x, y)
  return !(battleField[x][y] > 0);
};

/*
* Returns random sequence of ship placing directions
* */
const getDirections = () => {
  let directions = [];
  for (let i = 0; directions.length < 4; i++) {
    let number = getRandomNumber(4);
    if (directions.indexOf(number) === -1) {
      directions.push(number);
    }
  }
  return directions;
};

/*
* Returns random coordinate
* */
const getRandomCoordinate = (grid) => {
  const max = grid-1;

  console.log("grid",grid)
  return [Math.floor(Math.random() * max), Math.floor(Math.random() * max)]
};

/*
* Returns random number in range from 0 to @param 'max'
* */
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max)
};

/*
*  Makes clone of battleField
*
*  @param initial battleField
*
*  @returns clone of initial battleField
* */
export const makeClone = (battleField, grid) => {
  let clone = [];

  for (let i = 0; i < battleField.length; i++) {

    clone[i] = [];
    for (let j = 0; j < battleField[i].length; j++) {
      clone[i][j] = battleField[i][j];
    }


  }
  return clone;
};


