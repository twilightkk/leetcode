/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 穷举法  时间O(n^2) 空间O(1)
/* var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let temp = target - nums[i]
      if (temp == nums[j]) {
        return [i, j]
      }
    }
  }
}; */

// 使用map 时间O(n) 空间O(n)
/* var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i]
    if (map.has(temp)) {
      return [map.get(temp), i]
    }
    map.set(nums[i], i)
  }
}; */
// @lc code=end

