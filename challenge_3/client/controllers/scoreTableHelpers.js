function isGameOver(currentFrame) {
  return currentFrame === 0 ? true : false;
}

function handleGameOver(gameTotal) {
  window.alert(`Nice game! Your score is: ${gameTotal}`)
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

function getNextFrame(currentFrame) {
  return currentFrame < 10 ? currentFrame + 1 : 0;
}

  module.exports = { isGameOver, isRollStrike, isStrikeCounterActive, isNewFrame, calculateFrameTotal, isRollTwo, isRollSpare,
  handleGameOver, decrementStrikeCounter, handleStrike, getNextRoll, getNextFrame }