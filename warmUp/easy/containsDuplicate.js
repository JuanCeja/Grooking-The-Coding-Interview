// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums= [1, 2, 3, 4]
// Output: false - There are no duplicates in the given array.

// Example 2:
// Input: nums= [1, 2, 3, 1]
// Output: true - '1' is repeating.

function containsDuplicate(nums) {
    let mySet = new Set();
    for (let num of nums) {
        if (mySet.has(num)) return true;
        else mySet.add(num);
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true