function isGameOver(currentFrame) {
  return currentFrame === 0 ? true : false;
}

function handleGameOver(currentFrame, gameTotal) {
  if (isGameOver(currentFrame)) {
    window.alert(`Nice game! Your score is: ${gameTotal}`)
    return;
  }
}

function isRollStrike(currentRoll, rollValue) {
  return currentRoll === "rollOne" && rollValue === 10 ? true : false;
}

function isRollSpare(currentRoll, frameTotal) {
  return currentRoll === "rollTwo" && frameTotal === 10 ? true : false;
}

function isStrikeCounterActive(counter) {
  return counter > 0 ? true : false;
}

function decrementStrikeCounter(strikeCounter) {
  return isStrikeCounterActive(strikeCounter) ? -1 : 0;
}

function handleStrike(currentRoll, rollValue, frameTotal) {
  let counter = 0;
  if (isRollStrike(currentRoll, rollValue)) {
    console.log("roll is a strike");
    counter = 2;
  } else if (isRollSpare(currentRoll, frameTotal)) {
    console.log("roll is a spare");
    counter = 1
  }
  return counter;
}

function isNewFrame(currentRoll) {
  return currentRoll === "rollOne" ? true : false;
}

function isRollTwo(roll) {
  return roll === "rollTwo" ? true : false;
}

function getNextRoll(currentRoll, rollValue) {
  let newRoll;
  if (isRollTwo(currentRoll) || rollValue === 10) {
    return "rollOne";
  } else {
    return "rollTwo";
  }
}

function calculateFrameTotal(currentRoll, rollOneVal, newRollVal) {
  if (currentRoll === "rollOne") {
    return newRollVal;
  }
  return rollOneVal + newRollVal;
}



  //TODO ****************JQUERY  */if so, add value to previous frame's total subtract either 1 or 2 from strike counter



//TODO ****************JQUERY */update the active frame with the frame total and the roll value
  //update the current roll to the next roll
    //use isRollTwo function

//check if the next roll is roll one
  //if so, check if the current frame is the last
    //if so, end the game
  //if not, update the current frame to the next

  module.exports = { isGameOver, isRollStrike, isStrikeCounterActive, isNewFrame, calculateFrameTotal, isRollTwo, isRollSpare,
  handleGameOver, decrementStrikeCounter, handleStrike, getNextRoll }