// https://leetcode.com/problems/two-sum/
const equalsArrays = require("./utils");
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. 
Test case 1

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
function twoSum(nums, target) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in dict === false) {
      dict[nums[i]] = i;
    } else {
      return [dict[complement], i];
    }
  }
  return [0];
}
function test() {
  let nums = [2, 7, 11, 15];
  let target = 9;
  let expected = [0, 1];
  const result = twoSum(nums, target);
  console.log(result, result)
 
  return equalsArrays(result, expected);
}
console.log(test());
