// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  let regBuild = markers.map((value) => `(\\s\\${value}+.+)`);

  let regex = new RegExp(regBuild.join('|'), 'g');
  return input.replace(regex, '');
}
