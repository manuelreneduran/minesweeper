//User clicks a score button


//check to make sure game isn't over
  //if so do nothing
  function gameIsOver(currentFrame) {
    return currentFrame === "gameOver" ? true : false;
  }

  //check the strike counter to see if previous roll was a spare or strike

  function isStrikeCounterActive(counter) {
    counter > 0 ? true : false;
  }

  //check to see if it's a new frame
  function isNewFrame(currentRoll) {
    return currentRoll === "rollOne" ? true : false;
  }
//check to see what the current roll is
  function isRollTwo(roll) {
    return roll === "rollTwo" ? true : false;
  }
  //if roll is rollTwo check to see if roll value exceeds maximum possible score for that frame
    //if so do nothing
  function rollIsInValidRange(currentRoll, prevRoll) {
    return prevRoll + currentRoll <= 10 ? true : false;
    }
    //if not update the state of that roll with new value
      //as well as the frame total and game total
  function calculateFrameTotal(currentRoll, rollOneVal, newRollVal) {
    //if it's roll one, frameTotal === roll value
    if (currentRoll === "rollOne") {
      return newRollVal;
    }
    //if it's roll two, frameTotal === rollOne value plus current value
    return rollOneVal + newRollVal;
  }


  function isRollStrike(rollValue) {
    return rollValue === 10 ? true : false;
  }

  function isRollSpare(frameTotal) {
    return frameTotal === 10 ? true : false;
  }

  //****************JQUERY  */if so, add value to previous frame's total subtract either 1 or 2 from strike counter

//check to see if frame total is a strike or a spare
  //if so, update strike counter to either 1 or 2

//update the active frame with the frame total and the roll value
  //update the current roll to the next roll

//check if the next roll is roll one
  //if so, check if the current frame is the last
    //if so, end the game
  //if not, update the current frame to the next

  module.exports = { gameIsOver, isStrikeCounterActive, isNewFrame, calculateFrameTotal, isRollTwo, rollIsInValidRange, isRollStrike, isRollSpare }