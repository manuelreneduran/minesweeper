function createFrames() {
  let frames = [];
  for (let i = 0; i < 10; i++) {
    frames.push([0, 0, 0]);
  };
  return frames;
}

function handleBonusRoll(frames, rollValue, bonusRollCounter) {
  frames[9][2] = frames[9][2] + rollValue;
  bonusRollCounter--;
  return {frames, bonusRollCounter};
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
  var bonusRollCounter = setBonusRollCounter(currentFrame, currentRoll, rollValue, frameTotal);
  return {strikeAndSpareContainer, bonusRollCounter};
}

function setBonusRollCounter(currentFrame, currentRoll, rollValue, frameTotal) {
  if (rollValue === 10 && currentFrame === 9 || currentFrame === 10) {
    return 2;
  } else if (isRollSpare(currentRoll, frameTotal) && currentFrame === (9 || 10)) {
    return 1;
  } else {
    return 0;
  }
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
  return currentFrame > 9 ? true : false;
}

function handleGameOver(currentFrame, frames, bonusRollCounter) {
  if (bonusRollCounter === 0 && isGameOver(currentFrame)) {
    var gameTotal = calculateGameTotal(frames);
    window.alert(`Nice game! Your score is: ${gameTotal}`)
  }
}

function calculateGameTotal(frames) {
  var sum = 0;
  for (var frame of frames) {
    sum += frame[2];
  }
  return sum;
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

function updateCurrentFrame(currentRoll, currentFrame, rollValue) {
  if (currentRoll === "rollTwo") {
    return currentFrame + 1;
  } else if (isRollStrike(currentRoll, rollValue) && currentRoll === "rollOne") {
    return currentFrame + 1;
  } else {
    return currentFrame;
  }
}

  module.exports = { createFrames, updatePreviousFrames, handleStrikeAndSpare, handleRollOne, handleRollTwo, handleAllRolls, isGameOver, isRollStrike, isRollSpare,
  handleGameOver, getNextRoll, getNextFrame, updateCurrentFrame, handleBonusRoll }