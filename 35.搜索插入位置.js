/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0, n = nums.length,right=n;
  while(left<=right){
    let mid = Math.floor(left + (right-left)/2)
    if(nums[mid]<target){
      left=mid+1
    }else{
      right=mid-1
    }
  }
  return left
};
let nums = [1, 3, 5, 6], target = 5;
console.log(searchInsert(nums,target))
// @lc code=end

