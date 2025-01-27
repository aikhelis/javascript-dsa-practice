//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function checks if two arrays have at least  |
//   |   one item in common.                               |
//   |                                                     |
//   | Return type: bool                                   |
//   | - Returns true if an item is found in both arrays.  |
//   | - Otherwise, returns false.                         |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to store    |
//   |   elements from the first array for quick lookup.   |
//   | - Example with Map: myMap.set(i, true);             |
//   | - Example with object: obj[arr1[i]] = true;         |
//   +=====================================================+
function itemInCommon(array1, array2) {
    const map = new Map();
    for (let i of array1) 
        map.set(i, true);
    for (let j of array2) 
        if (map.has(j)) 
            return true;
    return false;
}

// ---------------
// One Common Item
// ---------------
console.log("One Common Item:");
console.log("Input: [1, 3, 5], [2, 4, 5]");
console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 5]));
console.log("---------------");

// ---------------
// No Common Items
// ---------------
console.log("No Common Items:");
console.log("Input: [1, 3, 5], [2, 4, 6]");
console.log("Output: ", itemInCommon([1, 3, 5], [2, 4, 6]));
console.log("---------------");

// ---------------
// Multiple Common Items
// ---------------
console.log("Multiple Common Items:");
console.log("Input: [1, 2, 3], [2, 3, 4]");
console.log("Output: ", itemInCommon([1, 2, 3], [2, 3, 4]));
console.log("---------------");

// ---------------
// Empty Arrays
// ---------------
console.log("Empty Arrays:");
console.log("Input: [], []");
console.log("Output: ", itemInCommon([], []));
console.log("---------------");

// ---------------
// One Empty Array
// ---------------
console.log("One Empty Array:");
console.log("Input: [1, 2, 3], []");
console.log("Output: ", itemInCommon([1, 2, 3], []));
console.log("---------------");


