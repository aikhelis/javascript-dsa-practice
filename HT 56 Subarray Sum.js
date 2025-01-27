//   +=====================================================+
//   |               WRITE YOUR CODE HERE                  |
//   | Description:                                        |
//   | - This function finds a subarray that sums up to    |
//   |   the target value.                                 |
//   |                                                     |
//   | Return type: array                                  |
//   | - Returns an array with the start and end indices   |
//   |   of the subarray.                                  |
//   | - Returns an empty array if no such subarray exists.|
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to track    |
//   |   the sums and their indices.                       |
//   | - Example with Map:                                 |
//   |   sumIndex.set(currentSum, i);                      |
//   | - Example with object:                              |
//   |   sumIndex[currentSum] = i;                         |
//   +=====================================================+
    function subarraySum(nums, target) {
        const sumIndex = new Map();
        sumIndex.set(0, -1);
        let currentSum = 0;
     
        for (let i = 0; i < nums.length; i++) {
            currentSum += nums[i];
            if (sumIndex.has(currentSum - target)) {
                return [sumIndex.get(currentSum - target) + 1, i];
            }
            sumIndex.set(currentSum, i);
            console.log();
        }
     
        return [];
    }



// ---------------
// Positive Numbers
// ---------------
console.log("Positive Numbers:");
console.log("Input: [2, 4, 6, 3], Target: 10");
console.log("Output: ", JSON.stringify(subarraySum([2, 4, 6, 3], 10)));
console.log("---------------");
console.log("Input: [2, 4, 6, 3], Target: 9");
console.log("Output: ", JSON.stringify(subarraySum([2, 4, 6, 3], 9)));
console.log("---------------");
console.log("Input: [1, 4, 20, 3, 10, 5], Target: 33");
console.log("Output: ", JSON.stringify(subarraySum([1, 4, 20, 3, 10, 5], 33)));
console.log("---------------");
console.log("Input: [1, 2, 3], Target: 3");
console.log("Output: ", JSON.stringify(subarraySum([1, 2, 3], 3)));
console.log("---------------");
console.log("Input: [1, 1, 3], Target: 3");
console.log("Output: ", JSON.stringify(subarraySum([1, 1, 3], 3)));
console.log("---------------");


// ---------------
// Includes Zero
// ---------------
console.log("Includes Zero:");
console.log("Input: [1, 2, 3, 0, 4], Target: 6");
console.log("Output: ", JSON.stringify(subarraySum([1, 2, 3, 0, 4], 6)));
console.log("---------------");

// ---------------
// Negative Numbers
// ---------------
console.log("Negative Numbers:");
console.log("Input: [1, -1, 2, 3], Target: 4");
console.log("Output: ", JSON.stringify(subarraySum([1, -1, 2, 3], 4)));
console.log("---------------");

// ---------------
// No Subarray
// ---------------
console.log("No Subarray:");
console.log("Input: [1, 2, 3, 4], Target: 10");
console.log("Output: ", JSON.stringify(subarraySum([1, 2, 3, 4], 10)));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: [], Target: 1");
console.log("Output: ", JSON.stringify(subarraySum([], 1)));
console.log("---------------");
    

