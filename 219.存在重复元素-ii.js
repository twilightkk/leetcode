/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 * 
 * 描述：
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 * 
 * 示例
输入：nums = [1,2,3,1], k = 3
输出：true

输入：nums = [1,2,3,1,2,3], k = 2
输出：false
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 方法一：双指针排序
var containsNearbyDuplicate = function (nums,k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if(nums[i]==nums[j]){
        if(Math.abs(i-j)<=k){
          return true
        }
      }
    }
  }
  return false
};
// @lc code=end

