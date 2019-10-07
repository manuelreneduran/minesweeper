function createFrames() {
  let frames = [];
  for (let i = 0; i < 10; i++) {
    frames.push([0, 0, 0]);
  };
  return frames;
}

function updatePreviousFrames(strikeAndSpareContainer, frames, rollValue) {
  if (strikeAndSpareContainer.length > 0) {
    for (var container of strikeAndSpareContainer) {
      if (container[2] > 0) {
        container[0][2] = container[0][2] + rollValue;
        container[2] = container[2] - 1;
        frames[container[1]] = container[0];
      }
    }
  }
  return frames;
}

function handleStrikeAndSpare(currentRoll, rollValue, frames, strikeAndSpareContainer, frameTotal, currentFrame) {
  if (isRollStrike(currentRoll, rollValue)) {
    strikeAndSpareContainer.push([frames[currentFrame], currentFrame, 2]);
  } else if (isRollSpare(currentRoll, frameTotal)) {
    strikeAndSpareContainer.push([frames[currentFrame], currentFrame, 1]);
  }
  return strikeAndSpareContainer;
}

function handleRollOne(frames, currentFrame, rollValue, frameTotal) {
  frames[currentFrame][0] = rollValue;
  var rollOne = rollValue;
  frames[currentFrame][2] = rollValue;
  frameTotal = rollValue;
  return {frames, currentFrame, frameTotal, rollValue, rollOne};
}

function handleRollTwo(frames, currentFrame, rollValue, frameTotal) {
  frames[currentFrame][1] = rollValue;
  var rollOne = rollValue;
  frameTotal = frames[currentFrame][0] + rollValue;
  frames[currentFrame][2] = frameTotal;
  return {frames, currentFrame, frameTotal, rollValue, rollOne};
}

function handleAllRolls(currentRoll, frames, currentFrame, rollValue, frameTotal) {
  var returnObj;
  if (currentRoll === "rollOne") {
    returnObj = handleRollOne(frames, currentFrame, rollValue, frameTotal);
  } else {
    returnObj = handleRollTwo(frames, currentFrame, rollValue, frameTotal);
  }
  return returnObj;
}

function isGameOver(currentFrame) {
  return currentFrame === 10 ? true : false;
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

function getNextRoll(currentRoll, rollValue) {
  let newRoll;
  if (currentRoll === "rollTwo" || rollValue === 10) {
    return "rollOne";
  } else {
    return "rollTwo";
  }
}

function getNextFrame(currentFrame) {
  return currentFrame < 10 ? currentFrame + 1 : 0;
}

  module.exports = { createFrames, updatePreviousFrames, handleStrikeAndSpare, handleRollOne, handleRollTwo, handleAllRolls, isGameOver, isRollStrike, isRollSpare,
  handleGameOver, getNextRoll, getNextFrame }