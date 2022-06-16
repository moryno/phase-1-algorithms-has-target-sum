function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    const complement = target - array[i]
    for(let j = i + 1; j < array.length; j++){
      if(array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  It will take two iteration, the first through the entire array,
  the next is look through the rest of the array as it sum up the elements. This is Quadratic Time.
*/

/* 
  Add your pseudocode here
  define a function that takes array and integer as arguments
  if the sum of a pair in array is same as interger:
    return true
    else
    return false
*/

/*
  Add written explanation of your solution here
  define a function, hasTargetSum, that receives two arguments, an array and interger,
  the function should return true if the sum of two numbers in the array equals the interger
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 5));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
