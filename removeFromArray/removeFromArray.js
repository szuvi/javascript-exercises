const removeFromArray = function (givenArray, ...toBeRemoved) {
  let tempArray = givenArray;
  for (let i = 0; i < toBeRemoved.length; i++) {
    let currIndex = tempArray.indexOf(toBeRemoved[i]);
    if (currIndex !== -1) {
      tempArray.splice(currIndex, 1);
    }
  }
  return tempArray;
};

module.exports = removeFromArray;
