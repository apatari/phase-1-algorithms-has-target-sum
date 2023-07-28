function hasTargetSum(array, target) {
  // Write your algorithm here

  /* for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false */
  obj = {}
  for(const item of array) {
    if (target - item in obj) {
      return true
    }
    obj[item] = item
  }

  return false

}

/* 
  Write the Big O time complexity of your function here

O(n^2)  

*/

/* 
  Add your pseudocode here

  Iterate through each number in the array, adding it to each following number.  
  Compare each of these sums to the target, and if they are equal, return true.
  If after the loop there were no matches, return false.

*/

/*
  Add written explanation of your solution here

  This algorithm brute forces the problem by finding each possible combination until 
  either the sum is found or it can be shown that the target sum cannot be created with the array.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
