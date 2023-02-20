/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * 描述：给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 */
/**
 * 示例：
 输入: nums = [0,1,0,3,12]
 输出: [1,3,12,0,0]

 输入: nums = [0]
 输出: [0]
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 方法一：双指针移动
 * 1.两个指针都在左边起点
 * 2.如果右指针不等于0则交换左右指针的值，右指针++，左值针++
 * 3.否则只移动右指针,右指针++
 */
// 时间O(n)
// 空间O(1)
var moveZeroes = function(nums) {
  let n= nums.length,i=0,j=0
  while (j<n) {
    if(nums[j]!=0){
      let temp = nums[i]
      nums[i]=nums[j]
      nums[j]=temp
      i++
    }
    j++
  }
  return nums
};

// @lc code=end

