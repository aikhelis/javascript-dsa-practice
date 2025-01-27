//   +======================================================+
//   |                WRITE YOUR CODE HERE                  |
//   | Description:                                         |
//   | - This function finds duplicate numbers in an array. |
//   |                                                      |
//   | Return type: array                                   |
//   | - Returns an array containing the duplicate numbers. |
//   |                                                      |
//   | Tips:                                                |
//   | - You can use either a Map or an object for          |
//   |   counting occurrences of each number.               |
//   | - Example with Map:                                  |
//   |   numCounts.set(num, (numCounts.get(num) || 0) + 1); |
//   | - Example with object:                               |
//   |   numCounts[num] = (numCounts[num] || 0) + 1;        |
//   +======================================================+
function findDuplicates(numbers) {
    const numCounts = new Map();
    for (let num of numbers) {
            numCounts.set(num, (numCounts.get(num) || 0) + 1);
    }
    
    const dupes = [];
    for (let [k, v] of numCounts.entries()) {
        if (v > 1)
            dupes.push(k);
    }
    return dupes;
}



// ---------------
// No Duplicates
// ---------------
console.log("No Duplicates:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 3, 4, 5])));
console.log("---------------");

// ---------------
// Single Duplicate
// ---------------
console.log("Single Duplicate:");
console.log("Input: [1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Multiple Duplicates
// ---------------
console.log("Multiple Duplicates:");
console.log("Input: [1, 1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Repeating Duplicates
// ---------------
console.log("Repeating Duplicates:");
console.log("Input: [1, 1, 1, 2, 2, 2, 3]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 1, 2, 2, 2, 3])));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", JSON.stringify(findDuplicates([])));
console.log("---------------");

// ---------------
// Single Element
// ---------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", JSON.stringify(findDuplicates([1])));
console.log("---------------");


