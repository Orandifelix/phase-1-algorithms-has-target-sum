function hasTargetSum(array, target) {
  // Write your algorithm here
  // Iterate over all possible pairs of indices
  const len = array.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        // Retrieve the values at the two indices and add them together
        let num1 = array[i];
        let num2 = array[j];
        let sum = num1 + num2;
  
        // Check if the sum is equal to the target number
        if (sum === target) {
          // If so, print the two numbers and return true
          console.log(`Found a pair of numbers that add up to ${target}: ${num1} + ${num2} = ${sum}`);
          return true;
        }
      }
    }
  
    // If no pair was found, print a message and return false
    console.log(`No pair of numbers found that add up to ${target}`);
    return false;
  }
  

    
/* 
  Write the Big O time complexity of your function here
  O(N^2)
*/

/* 
  Add your pseudocode here
  Sum = random number 1 from array + random number 2 from array 
  sum === target sum
  if true {
    return true
  }
  else {
    return false
  }
*/

/*
  Add written explanation of your solution here
  Generate two random  numbers from the array and  add  them up.
  The sum  of  the numbers should be equated to the target sum value.
  return true if the solution was successfully or false if otherwise.
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
