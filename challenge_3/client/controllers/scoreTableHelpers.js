//User clicks a score button


//check to make sure game isn't over
  //if so do nothing
  function gameIsOver(currentFrame) {
    return currentFrame === "frameTen" ? true : false;
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

//check the strike counter to see if previous roll was a spare or strike
  //if so, add value to previous frame's total and subtract either 1 or 2 from strike counter

//check to see if frame total is a strike or a spare
  //if so, update strike counter to either 1 or 2

//update the active frame with the frame total and the roll value
  //update the current roll to the next roll

//check if the next roll is roll one
  //if so, check if the current frame is the last
    //if so, end the game
  //if not, update the current frame to the next

  module.exports = { gameIsOver, isRollTwo, rollIsInValidRange }